/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app')
var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')

// Import fontawesome fonts
var fontawesome = pickFiles('bower_components/fontawesome/fonts', {
    srcDir: '/',
    files: [
        'fontawesome-webfont.ttf',
        'fontawesome-webfont.woff',
        'fontawesome-webfont.eot',
        'FontAwesome.otf',
        'fontawesome-webfont.svg'
    ],
    destDir: '/fonts'
})


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    vendorFiles: {
      'handlebars.js': null
    }
  })

  app.import('bower_components/bootstrap/dist/css/bootstrap.css')
  app.import('bower_components/fontawesome/css/font-awesome.min.css')

  return mergeTrees([
    app.toTree(),
    fontawesome
  ])
}
