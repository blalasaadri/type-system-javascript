module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ["plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    "prettier/prettier": "error",
    strict: ["error", "global"],
    "no-undef": ["error"],
    semi: false
  },
  overrides: [
    {
      files: ["**/*.test.js"],
      env: {
        jest: true
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ]
}
