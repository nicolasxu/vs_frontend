var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var appData = require('../../../routes/_data.js');
var Company = require('../../../models/company.model.js');

var NavLayout = Mn.LayoutView.extend({
	initialize: function () {
	

	},
	bindings: {

	},
	template: require('./nav.layout.html'),
	onRender: function() {
		
	},
	events: {
		'click #sent-link': function (e) {

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