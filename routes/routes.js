var Mn = require('backbone.marionette');
var RootLayout = require('../views/root/root.layout.js');
var LoginLayout = require('../views/login/login.layout.js');
var SignupLayout = require('../views/signup/signup.layout.js');
var DashboardLayout = require('../views/dashboard/dashboard.layout.js');
var appData = require('./_data.js');
var api = require('../models/_api.js');

var AppLayout = require('../views/app/app.layout.js');

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

		if(!this.app) {
			this.app = new AppLayout();
			this.app.render();
		}
	},
	// below are route functions
	default: function () {

		this.app.showChildView('app_region', new RootLayout());
	}, 
	login: function () {
		// if you new it every time the route is triggered,
		// multiple event binding will happen. 
		// Because it is not managed by region manager, so 
		// root view is not properly destroyed. 

		this.app.showChildView('app_region', new LoginLayout());

	},
	signup: function () {

		this.app.showChildView('app_region', new SignupLayout());
	},
	sent: function () {
		var route = this;
		this.loadBasicData()
			.then(function(){
				route.app.showChildView('app_region', new DashboardLayout());
			})
			.catch(function(err){
				if(err.toString() === "not login") {
					Backbone.history.navigate('/login', true);
				}
			});
	},
	loadBasicData: function () {
		// 1. load user data if no,
		return api.user.getInfo()
			.then(function(result) {
				if(result.code === 4008) {
					console.log('loadBasicData, not login');
					appData.isLogin = false; 
					throw new Error("not login"); 
				} else {
					appData.user = result.user;
				}
			})
			.then(function(){
				return api.company.getInfo()
					.then(function(result){
						appData.company = result.company;
					});
			});
	},
	onRoute: function (name, path, args ) {

	}
});

module.exports = Router;