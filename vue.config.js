module.exports = {
    devServer: {
        proxy: 'https://bling.com.br/',
        },
    configureWebpack: {
        devtool: 'source-map'
      },
    publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
    outputDir: 'pedido',
}