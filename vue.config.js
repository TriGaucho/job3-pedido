module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  filenameHashing: false,
  // publicPath: process.env.PUBLIC_PATH === 'production' ? '/hml-pedido' : '/hml-pedido',
  // outputDir: '../frontend/hml-pedido',
  publicPath: process.env.PUBLIC_PATH === 'production' ? '/pedido' : '/pedido',
  outputDir: '../frontend/pedido'
}