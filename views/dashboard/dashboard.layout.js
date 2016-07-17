var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../models/_api.js');
var appData = require('../../routes/_data.js');
var Nav = require('./nav/nav.layout.js');

var DashboardLayout = Mn.LayoutView.extend({
	initialize: function () {
	},
	el: '#app-container',
	template: require('./dashboard.layout.html'),
	regions: {

		/* Building region is only trigger during the new */
	},
	onBeforeRender: function () {
		var thisView = this; 
		// check if user is login
		// api.user.getInfo()
		// 	.then(function(result){

		// 		if(result.code !== 2000) {
		// 			// not login, or can't find user
		// 			Backbone.history.navigate('/login', true);
		// 		} else {
		// 			appData.user = result.user;

		// 		}
		// 	});
		api.company.getInfo()
			.then(function(result){
				console.log(result);
				if(result.code !== 2000) {
					// not login, or can't find user
					Backbone.history.navigate('/login', true);
				} else {
					if(!result.company) {
						// TODO: show model dialog
						console.log(result);
					}
				}
			});
	},
	onRender: function () {
		this.addRegion('nav', '#vs-nav-region');
		this.addRegion('header', '#vs-header-region');
		this.addRegion('content', '#vs-content-region');

		var ss = new Nav();
		var navRegion = this.getRegion('nav');

		navRegion.show( ss);
	}
});

module.exports = DashboardLayout;