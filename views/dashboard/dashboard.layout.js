var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../models/_api.js');
var appData = require('../../routes/_data.js');

var DashboardLayout = Mn.LayoutView.extend({
	initialize: function () {
		// called only when new operator is used
	},
	el: '#app-container',
	template: require('./dashboard.layout.html'),
	regions: {
		header: '#vs-header',
		nav: '#vs-nav',
		content: '#vs-content'
	},
	onBeforeRender: function () {
		// check if user is login
		api.user.getInfo()
			.then(function(result){
				console.log(result);
				if(result.code !== 2000) {
					// not login, or can't find user
					Backbone.history.navigate('/login', true);
				} else {
					appData.user = result.user;
				}
			})
	}
});

module.exports = DashboardLayout;