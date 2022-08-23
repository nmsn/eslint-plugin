# eslint-plugin-nmsn-tools

eslint tools

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-nmsn-tools`:

```sh
npm install eslint-plugin-nmsn-tools --save-dev
```

## Usage

Add `nmsn-tools` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nmsn-tools"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nmsn-tools/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

## TODO

- [ ] 完成 no-color 其他场景的 rule
  - [ ] 颜色为对象属性
  - [ ] 颜色为函数返回结果
  - [ ] 三元表达式
  - [ ] 字符串模版


