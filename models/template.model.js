var Mn = require('backbone.marionette');
var $ = require('jquery');
var api = require('./_api.js');

var Template = Backbone.Model.extend({
	initialize: function () {

	},
	fetch: function () {
		// iDs is an array of invoice template ID
		return api.template.getAll();
	}
});

module.exports = Template;