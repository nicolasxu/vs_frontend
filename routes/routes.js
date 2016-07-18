var Mn = require('backbone.marionette');
var RootLayout = require('../views/root/root.layout.js');
var LoginLayout = require('../views/login/login.layout.js');
var SignupLayout = require('../views/signup/signup.layout.js');
var DashboardLayout = require('../views/dashboard/dashboard.layout.js');
var appData = require('./_data.js');

var Router = Mn.AppRouter.extend({
	routes: {
		'': 'default',
		'login(/)': 'login',     // http://localhost:8080/#/login
		'signup(/)': 'signup',    // http://localhost:8080/#/signup
		'dashboard/sent(/)': 'sent',
		'dashboard(/)': 'sent'
	}, 
	initialize: function () {
		var initData = this.getOption('keyInOptions');
	
	},
	// below are route functions
	default: function () {

		if(!this.rl) {
			this.rl = new RootLayout();
		}
		this.rl.render();
	}, 
	login: function () {
		// if you new it every time the route is triggered,
		// multiple event binding will happen. 
		// Because it is not managed by region manager, so 
		// root view is not properly destroyed. 
		if(!this.ll) {
			this.ll = new LoginLayout();
		}
		
		this.ll.render();

	},
	signup: function () {
		if(!this.sl) {
			this.sl = new SignupLayout();
		}
		this.sl.render();
	},
	sent: function () {
		if(!this.dl) {
			this.dl = new DashboardLayout();
		}
		this.dl.render();
	},
	onRoute: function (name, path, args ) {

		if(appData.isLogin === false ) {
			Backbone.history.navigate('/login', true);
		}
	}
});

module.exports = Router;