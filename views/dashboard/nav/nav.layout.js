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
	events: {
		'click #sent-link': function (e) {
			e.preventDefault();
			alert('sent-link')
		}
	}, 
	onAttach: function () {
		// exclusive region event, only triggered by parentView.show() method
	}
});

module.exports = NavLayout;