module.exports = {
  root: true,
  extends: ["./index.js"],
  env: {
    es2020: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    /* Please add only required rules for nextjs */
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react-hooks/exhaustive-deps": "error",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "assert": "either" // This allows either nesting the input or using htmlFor
      }
    ]
  },
};
