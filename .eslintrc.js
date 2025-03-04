module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Add any custom rules here
  },
  ignorePatterns: ["dist/", "node_modules/"],
};
