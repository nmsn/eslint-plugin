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
        const result = node.properties.some((item) => {
          return item.key.name === "color" && item.value.value === "red";
        });

        if (result) {
          context.report({
            node,
            message: `color`,
          });
        }
      },
    };
  },
};
