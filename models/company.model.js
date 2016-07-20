var Mn = require('backbone.marionette');
var api = require('./_api.js');

var Company = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Company model...');
	},
	create: function () {
		var companyJson = this.attributes;
		console.log(companyJson);
		return api.company.create(companyJson);
	}
});

module.exports = Company;
