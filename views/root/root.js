var Mn = require('backbone.marionette');
require('backbone.stickit');

var RootView = Mn.LayoutView.extend({
	el: '#app-container',
	template: '<div><h1 id="name">this is root view111</h1> is great</div>',
	bindings: {
		'#name': 'name'
	},
	onRender: function () {
		console.log('on render');
		this.stickit();

	},
	onShow: function () {
		console.log('after render');
		alert('fdsf');
		this.stickit();
		
	}
});

module.exports = RootView;


