const path = require('path')
module.exports = {
    webpack:{
        alias:{
            "@":path.resolve(__dirname,"src")
        },
        configure: (webpackConfig) => {
            // 在开发环境启用 Source Map
            if (process.env.NODE_ENV === 'development') {
              webpackConfig.devtool = 'inline-source-map';
            } else {
              // 在生产环境启用 Source Map
              webpackConfig.devtool = 'source-map';
            }
            return webpackConfig;
          },
    }
}