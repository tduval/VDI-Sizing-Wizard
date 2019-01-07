const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/VDI-Sizing-Wizard/'
    : '/',
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [ '/' ]
      })
    ]
  }
}
