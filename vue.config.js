module.exports = {
    devServer: {
        proxy: 'https://bling.com.br/',
        },
    configureWebpack: {
        devtool: 'source-map'
      },
    publicPath: process.env.VUE_APP_API_URL === 'production' ? '././' : './',
    outputDir: 'pedido',
}