/**
 * @fileoverview eslint-plugin
 * @author nmsn
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

module.exports = {
  rules: requireIndex(__dirname + "/rules"),

  configs: {
    plugins: ["nmsn-tools"],
    recommended: {
      rules: {
        "nmsn-tools/no-color-in-jsx": 1,
        "nmsn-tools/to-do-comments": 1,
      },
    },
  },
};
