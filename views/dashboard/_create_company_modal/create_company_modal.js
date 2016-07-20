var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../../models/_api.js');
var appData = require('../../../routes/_data.js');
var Company = require('../../../models/company.model.js');

// js code for create company modal dialog
var CreateCompanyLayout = Mn.LayoutView.extend({
	initialize: function () {
		this.model = new Company({name:''});
	},
	bindings: {
		"#inputCompanyName": "name"
	},
	template: require('./create_company_modal.html'),
	events: {
		"click #submit-company": 'createCompany'
	},
	showModal: function () {
		$('#myModal').modal('show');
	},
	hideModal: function () {
		$('#myModal').modal('toggle');
	},
	onBeforeDestroy: function () {
		this.hideModal();
	},
	onRender: function () {
		if(this.model) {
			this.stickit();
		}
	},
	createCompany: function () {
		var thisModel = this;
		this.model.create()
			.then(function(result) {
				if(result.code === 2000) {
					appData.company = result.company;
					console.log('create company success');
					thisModel.hideModal();
				}
				if(result.code === 4008) {
					
					console.log('createCOmpany - user is not login');
					Backbone.history.navigate('/login', true);
				}
			});
	}
});

module.exports = CreateCompanyLayout;