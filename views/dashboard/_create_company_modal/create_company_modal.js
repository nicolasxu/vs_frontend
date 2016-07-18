var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../../models/_api.js');
var appData = require('../../../routes/_data.js');

// js code for create company modal dialog
var CreateCompanyLayout = Mn.LayoutView.extend({
	initialize: function () {

	},
	template: require('./create_company_modal.html'),
	events: {

	},
	showModal: function () {
		$('#myModal').modal('show');
	},
	hideModal: function () {
		$('#myModal').modal('toggle');
	},
	onBeforeDestroy: function () {
		console.log('modal onBeforeDestroy');
		this.hideModal();
	}
});

module.exports = CreateCompanyLayout;