
var $ = require('jquery');
var Mn = require('backbone.marionette');
require('bootstrap-loader'); // load bootstrap 3
require('./scss/style.scss');
// require('file?name=[name].[ext]!./img/favicon.ico');
// require('file?name=[name].[ext]!./img/spider-web.svg');
require('./img/favicon.ico');
require('./img//spider-web.svg');
require('./img/invoice_logo.png'); // invoice logo for testing

var Router = require('./routes/routes.js');

var api = require('./models/_api.js');
var appData = require('./routes/_data.js');

var app = new Mn.Application();
app.on('start', function(options) {
	var router = new Router();
	Backbone.history.start();
});

$(document).ready(function(){

	app.start();

});

