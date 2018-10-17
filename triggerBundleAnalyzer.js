// node triggerBundleAnalyzer.js
// creates bundle analysis:  ~ wba-report.html
process.env.NODE_ENV = "production";
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const webpackConfigProd = require("react-scripts/config/webpack.config.prod");

webpackConfigProd.plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: "../wba-report.html"
  })
);

require("react-scripts/scripts/build");
