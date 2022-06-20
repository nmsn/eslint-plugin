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
      description: "Color strings should not used in jsx",
      category: "Stylistic Issues",
      recommended: true,
    },
    schema: [],
  },
  create: function (context) {
    return {
      ObjectExpression(node) {
        const target = node.properties.find((item) => {
          return isColorValue(item.value.value);
        });

        const colorStr = (target && target.value && target.value.value) || "";

        if (colorStr) {
          context.report({
            node: target,
            message: `Don't use color string '${colorStr}' in jsx`,
          });
        }
      },
    };
  },
};
