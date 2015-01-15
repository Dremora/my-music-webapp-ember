/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler')
var mergeTrees = require('broccoli-merge-trees')


var app = new EmberApp();

app.import('bower_components/bootstrap/dist/css/bootstrap.css');

app.import('bower_components/fontawesome/css/font-awesome.min.css');

app.import('bower_components/moment/moment.js');
app.import('bower_components/ember-data.model-fragments/dist/ember-data.model-fragments.js');



// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

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
});

module.exports = mergeTrees([
    app.toTree(),
    fontawesome
]);
