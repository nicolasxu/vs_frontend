var Mn = require('backbone.marionette');
// var $ = require('jquery');
require('backbone.stickit');
var api = require('../../models/_api.js');

var RootLayout = Mn.LayoutView.extend({
	// el: '#app-container',
	template: require('./root.layout.html'),
	bindings: {
		'#name': 'name'
	},
	onRender: function () {
		if(this.model) {
			this.stickit();
		}
	},
	events: {
		'click #logout-link': 'logout'
	},
	logout: function (e) {
		e.preventDefault();
		api.user.logout()
			.then(function () {
				alert('logout success');
			});
	}
});

module.exports = RootLayout;


