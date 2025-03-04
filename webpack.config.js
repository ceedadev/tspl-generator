const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "tspl-generator.min.js",
    path: path.resolve(__dirname, "dist/browser"),
    library: {
      name: "TSPLGenerator",
      type: "umd",
      export: "default",
    },
    globalObject: "this",
  },
};
