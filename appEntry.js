var $ = require('jquery');
var Mn = require('backbone.marionette');
require('bootstrap-loader'); // load bootstrap 3
require('./scss/style.scss');
var Router = require('./routes/routes.js');

var app = new Mn.Application();
app.on('start', function(options) {
	var router = new Router();
	Backbone.history.start();
});

$(document).ready(function(){
	app.start();
});