const path = require("path");

module.exports = {
  // mode of build
  mode: "production",
  // if yoy want to change of entry file of webpack default is (src/index.js)
  entry: "./src/main.js",
  // if you want to build output file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
  //   all loader loader here
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader order must be like below
        use: ["style-loader", "css-loader"],
      },
    ],
  },

};
