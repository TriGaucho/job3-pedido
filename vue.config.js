module.exports = {
    configureWebpack: {
        devtool: 'source-map'
      },
    publicPath: process.env.PUBLIC_PATH === 'production' ? '././' : './',
    outputDir: 'pedido',
}