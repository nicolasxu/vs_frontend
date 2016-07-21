var Invoice = require('./invoice.model.js');

var Mn = require('backbone.marionette');

var api = require('./_api.js');

var InvoiceCollection = Backbone.Collection.extend({
	model: Invoice,
	fetch: function () {
		var thisCollection = this;
		return api.invoice.getSentList()
			.then(function(result) {
				if(result.code !== 2000) {
					// if not successful, then return the result to higher level 
					var err = new Error("there is an error in fetching sent invoice list");
					err.result = result;
					throw err;
				} else {
					// code is 2000
					thisCollection.reset(result.invoices);
				}
			});
	}
});

module.exports = InvoiceCollection;

