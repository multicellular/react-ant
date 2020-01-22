const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'https://test.bestas.vip',
            secure: true,
            changeOrigin: true,
            pathRewrite: {
                // '^/api': ''
            }
        })
    )
}