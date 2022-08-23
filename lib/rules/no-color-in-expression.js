const colorNameObj = require("color-name");

const colorNameStr = Object.keys(colorNameObj);
const reg = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\\)]*\)/gi;
const isColorValue = (val) => {
  return reg.test(val) || colorNameStr.includes(val);
};

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Color strings should not used in expression",
      category: "Stylistic Issues",
      recommended: true,
    },
    schema: [],
  },
  create: function (context) {
    return {
      // 初始化语句
      VariableDeclarator(node) {
        const { init: { value = "" } = {} } = node || {};
        if (isColorValue(value)) {
          console.log(value);
          context.report({
            node,
            message: `Don't use color string '${value}' in expression`,
          });
        }
      },

      // 赋值语句
      AssignmentExpression(node) {
        const { right: { value = "" } = {} } = node || {};
        if (isColorValue(value)) {
          console.log(value);
          context.report({
            node,
            message: `Don't use color string '${value}' in expression`,
          });
        }
      },
    };
  },
};
