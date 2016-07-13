var Invoice = require('./invoice.model.js');

var Mn = require('backbone.marionette');


var InvoiceCollection = Backbone.Collection.extend({
	model: Invoice
});

module.exports = InvoiceCollection;

