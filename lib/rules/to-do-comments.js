module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "TODO Comments that need to be processed",
      category: "Stylistic Issues",
      recommended: true,
    },
    schema: [],
  },
  create: function (context) {

    const sourceCode = context.getSourceCode();

    const processingWords = ["FIXME", "XXX", "TODO", "HACK"];
    return {
      Program() {

        const comments = sourceCode.getAllComments();

        comments.forEach((comment) => {
          let { value } = comment;
          
          for (const word of processingWords) {
            if (value.includes(word)) {
              
              context.report({
                node: comment,
                message: `The code here needs to be processed, ${word}`,
              });
            }
          }
        });
      },
    };
  },
};
