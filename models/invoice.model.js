var Mn = require('backbone.marionette');


var Invoice = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Author model...');
	}
});

module.exports = Invoice;

