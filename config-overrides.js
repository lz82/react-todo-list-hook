const path = require("path");

const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");

const resolve = (dir) => {
  return path.join(__dirname, ".", dir);
};

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    noIeCompat: true,
    modules: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    },
  }),

  addWebpackAlias({
    "@": resolve("src"),
  })
);
