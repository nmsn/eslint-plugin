const { RuleTester } = require("eslint");

const rule = require("../../../lib/rules/no-color-in-jsx");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } },
});

// const errMsg = (warnWord) => `The code here needs to be processed, ${warnWord}`;

ruleTester.run("no-color-in-jsx", rule, {
  valid: ["<div style={{ color: 123 }}>123</div>", "<Icon type={1}>123</Icon>"],
  invalid: [
    {
      code: "<div style={{ color: 'red' }}>123</div>",
      errors: [
        {
          message: "Don't use color string 'red' in jsx",
        },
      ],
    },
    {
      code: "<div style={{ color: '#000' }}>#000</div>",
      errors: [
        {
          message: "Don't use color string '#000' in jsx",
        },
      ],
    },
    {
      code: "<Icon color='red'>123</Icon>",
      errors: [
        {
          message: "Don't use color string 'red' in jsx",
        },
      ],
    },
    {
      code: "<Icon color='#000'>#000</Icon>",
      errors: [
        {
          message: "Don't use color string '#000' in jsx",
        },
      ],
    },
  ],
});
