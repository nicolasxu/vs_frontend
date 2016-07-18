var $ = require('jquery');
var Mn = require('backbone.marionette');
require('bootstrap-loader'); // load bootstrap 3
require('./scss/style.scss');
var Router = require('./routes/routes.js');

var api = require('./models/_api.js');
var appData = require('./routes/_data.js');

var app = new Mn.Application();
app.on('start', function(options) {
	var router = new Router();
	Backbone.history.start();
});

$(document).ready(function(){

	api.company.getInfo()
		.then(function(result){
			if(result.code !== 2000) {
				appData.isLogin = false; 
			} else {
				appData.company = result.company;
				appData.isLogin = true; 
			}
			app.start();
			console.log(result);

		})

});

