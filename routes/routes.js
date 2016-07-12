var Mn = require('backbone.marionette');

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
	}, 
	login: function () {
		console.log('this is login route');
	},
	signup: function () {
		console.log('this is signup route');
	}
});

module.exports = Router;