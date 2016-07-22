var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var Invoice = require('../../../../models/invoice.model.js');
var InvoiceItemView = require('./item/sent.itemview.js');
var InvoiceCollection = require('../../../../models/invoiceCollection.model.js');


var SentCompositeView = Mn.CompositeView.extend({
	initialize: function () {

		// this.model = new 
		// build collection
		var ic = new InvoiceCollection();
		this.collection = ic;
		ic.fetch()
			.catch(function (err) {
				console.log(err);
				if(err.result.code === 4008) {
					// not login
					return Backbone.history.navigate('/login', true);
				}
			});

	},
	template: require('./sent.composite.html'),
	childView: InvoiceItemView,
	childViewContainer: 'ul.list-items'
});

module.exports = SentCompositeView;
