var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var LoginLayout = Mn.LayoutView.extend({
	el: '#app-container',
	template: require('./login.layout.html'),
	bindings: {},
	onRender: function() {
		this.stickit();
	}
});

module.exports = LoginLayout;