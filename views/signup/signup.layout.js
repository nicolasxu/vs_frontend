var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');

var SignupLayout = Mn.LayoutView.extend({
	el: '#app-container',
	template: require('./signup.layout.html'),
	bindings: {},
	onRender: function() {
		if(this.model) {
			this.stickit();
		}
	}
});


module.exports = SignupLayout;


