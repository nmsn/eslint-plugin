const { RuleTester } = require("eslint");

const rule = require("../../../lib/rules/to-do-comments");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2018 },
});

const errMsg = (warnWord) => `The code here needs to be processed, ${warnWord}`;

ruleTester.run("comments-key", rule, {
  valid: [
    "// 一般注释",
    "// FIX：修复注释",
    `/**
      * 多行注释
      */`,
  ],
  invalid: [
    {
      code: "// FIXME: 此处代码需要修复",
      errors: [{ message: errMsg("FIXME") }],
    },
    {
      code: "// TODO: 待处理的代码",
      errors: [{ message: errMsg("TODO") }],
    },
    {
      code: `/**
            * XXX
            * 需要改进的地方
            */`,
      errors: [{ message: errMsg("XXX") }],
    },
  ],
});
