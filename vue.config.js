module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  filenameHashing: false,
  publicPath: process.env.PUBLIC_PATH === 'production' ? '/hml' : '/hml',
  outputDir: 'hml',
}