var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');


var NavLayout = Mn.LayoutView.extend({
	initialize: function () {
		console.log('init NavLayout...');
	},
	template: require('./nav.layout.html'),
	onRender: function() {

	},
	event: {

	}, 
	onAttach: function () {
		console.log('attaching NavLayout...');
	}
});

module.exports = NavLayout;