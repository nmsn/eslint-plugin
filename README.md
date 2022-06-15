# eslint-plugin-eslint-plugin

eslint-plugin

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-plugin`:

```sh
npm install eslint-plugin-eslint-plugin --save-dev
```

## Usage

Add `eslint-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-plugin"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-plugin/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


