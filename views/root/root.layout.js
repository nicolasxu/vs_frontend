var Mn = require('backbone.marionette');
require('backbone.stickit');
console.log(require('./root.layout.html'));

var RootLayout = Mn.LayoutView.extend({
	el: '#app-container',
	template: require('./root.layout.html'),
	bindings: {
		'#name': 'name'
	},
	onRender: function () {
		console.log('on render');
		this.stickit();

	},
	onShow: function () {

		
	}
});

module.exports = RootLayout;


