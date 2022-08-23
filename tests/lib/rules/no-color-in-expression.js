const { RuleTester } = require("eslint");

const rule = require("../../../lib/rules/no-color-in-expression");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } },
});

// const errMsg = (warnWord) => `The code here needs to be processed, ${warnWord}`;

ruleTester.run("no-color-in-expression", rule, {
  valid: ["const a = 1;", "let a = 1; a = 2;"],
  invalid: [
    {
      code: "const a = 'red';",
      errors: [
        {
          message: "Don't use color string 'red' in expression",
        },
      ],
    },
    {
      code: "let a = 1; a = 'red';",
      errors: [
        {
          message: "Don't use color string 'red' in expression",
        },
      ],
    },
  ],
});
