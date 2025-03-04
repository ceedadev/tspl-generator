module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["dist/", "node_modules/"],
  overrides: [
    {
      files: ["**/*.test.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
