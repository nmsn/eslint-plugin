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
      JSXAttribute(node) {
        const { type = "", value = "" } = (node || {}).value || {};
        if (type === "Literal" && isColorValue(value)) {
          context.report({
            node,
            message: `Don't use color string '${value}' in jsx`,
          });
        } else if (type === "JSXExpressionContainer") {
          const { expression = {} } = (node || {}).value || {};

          if (expression.type === "ObjectExpression") {
            const { properties = [] } = expression;
            properties.forEach((item) => {
              const { value = {} } = item;
              if (isColorValue(value.value)) {
                context.report({
                  node: value,
                  message: `Don't use color string '${value.value}' in jsx`,
                });
              }
            });
          }
        }
      },
    };
  },
};
