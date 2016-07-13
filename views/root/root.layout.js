var Mn = require('backbone.marionette');
// var $ = require('jquery');
require('backbone.stickit');


var RootLayout = Mn.LayoutView.extend({
	el: '#app-container',
	template: require('./root.layout.html'),
	bindings: {
		'#name': 'name'
	},
	onRender: function () {
		if(this.model) {
			this.stickit();
		}
	}
});

module.exports = RootLayout;


