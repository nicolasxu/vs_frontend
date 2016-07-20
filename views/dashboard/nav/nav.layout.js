var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var appData = require('../../../routes/_data.js');

var NavLayout = Mn.LayoutView.extend({
	initialize: function () {

	},
	template: require('./nav.layout.html'),
	onRender: function() {
	
	},
	events: {
		'click #sent-link': function (e) {
			// e.preventDefault();
			alert('sent-link')
		}
	}, 
	onAttach: function () {
		// exclusive region event, only triggered by parentView.show() method
		this.markActiveMenuItem();
	},
	markActiveMenuItem: function () {
		var urlFrag = Backbone.history.getFragment();
		switch (urlFrag) {
			case 'dashboard':
			case 'dashboard/sent':
				$('#sent').addClass('active');
				break; 
		}
	}
});

module.exports = NavLayout;