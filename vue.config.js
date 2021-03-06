const path = require("path");

module.exports = {
  productionSourceMap: false,
  devServer: {
    inline: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "/src/renderer"),
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "PrintChargeAdjuster",
        protocols: {
          name: "PrintChargeAdjuster URL",
          schemes: ["print-charge-adjuster"],
        },
      },
      mainProcessFile: "src/main/index.js",
      rendererProcessFile: "src/renderer/index.js",
      preload: "src/renderer/preload.js",
      // fileAssociations: {
      //   protocols: {

      //   }
      // }
    },
  },
};
