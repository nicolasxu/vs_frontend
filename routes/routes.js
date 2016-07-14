var Mn = require('backbone.marionette');
var RootLayout = require('../views/root/root.layout.js');
var LoginLayout = require('../views/login/login.layout.js');
var SignupLayout = require('../views/signup/signup.layout.js');
// var SignupLayout = require('../views/signup/')
var Router = Mn.AppRouter.extend({
	routes: {
		'': 'default',
		'login(/)': 'login',     // http://localhost:8080/#/login
		'signup(/)': 'signup'    // http://localhost:8080/#/signup
	}, 
	initialize: function () {
		var initData = this.getOption('keyInOptions');
	},
	// below are route functions
	default: function () {
		console.log('this is default route');
		var rl = new RootLayout();
		rl.render();

	}, 
	login: function () {
		var ll = new LoginLayout();
		ll.render();
		console.log('this is login route');
	},
	signup: function () {
		var sl = new SignupLayout();
		sl.render();

	}
});

module.exports = Router;