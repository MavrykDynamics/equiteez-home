const postcss = require("postcss");
const postcssEnvFunction = require("postcss-env-function");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const path = require("path");

const config = postcss([
  autoprefixer,
  tailwindcss,
  postcssEnvFunction({
    importFrom: [path.resolve("./app/styles/vars.json")],
  }),
]);

module.exports = config;
