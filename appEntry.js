var $ = require('jquery');
var Mn = require('backbone.marionette');
require('bootstrap-loader'); // load bootstrap 3
require('./scss/style.scss');
var Router = require('./routes/routes.js');
var RootView = require('./views/root/root.js');


var Author = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Author model...');
	}
});
var author = new Author({name: 'Nicolas Xu'})

var app = new Mn.Application();
app.on('start', function(options) {
	var router = new Router();
	Backbone.history.start();
	var rv = new RootView({model: author});
	rv.render();

});

$(document).ready(function(){
	app.start();
});