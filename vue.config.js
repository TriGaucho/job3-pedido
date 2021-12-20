module.exports = {
    devServer: {
        proxy: 'https://bling.com.br/',
        },
    configureWebpack: {
        devtool: 'source-map'
      },
    publicPath: process.env.PUBLIC_PATH === 'production' ? '././' : './',
    outputDir: 'pedido',
}