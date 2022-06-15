const { RuleTester } = require("eslint");

// 获取自定义的规则
const rule = require("../../../lib/rules/max-params");
var ruleTester = new RuleTester();
ruleTester.run("max-params", rule, {
  valid: ["function test(d, e, f) {}"],
  invalid: [
    {
      code: "function test(a, b, c, d) {}",
      errors: [
        {
          message: "参数最多不能超过3个",
        },
      ],
    },
  ],
});
