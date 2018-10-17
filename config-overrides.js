 const { injectBabelPlugin } = require('react-app-rewired');
 const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

  module.exports = function override(config, env) {
  //  inject babel plugin for ant-design
    config = injectBabelPlugin(
     ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
     config,
   );
   // config for webpack analyzer
   if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    })
  }
    return config;
  };