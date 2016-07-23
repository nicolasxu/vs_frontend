var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var Invoice = require('../../../../models/invoice.model.js');
var InvoiceItemView = require('./item/sent.itemview.js');
var InvoiceCollection = require('../../../../models/invoiceCollection.model.js');
var cmdChannel = require('../sentCommand/cmdChannel.js');


var SentCompositeView = Mn.CompositeView.extend({
	initialize: function () {
		this.on('render:collection', function(e) {
			this.$checkBoxes = $('.i-checker input', this.$el);
		});

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
	childViewContainer: 'ul.list-items',
	ui: {
		// checkBoxes: '.i-checker'
	},
	events: {
		'click .i-checker': 'onCheckBox'
	},
	onCheckBox: function (e) {
		
		// console.log(this.ui.checkBoxes.length);
		var invoiceId = e.target.parentElement.dataset.invoiceid;
		// cmdChannel.trigger('selected', invoiceId);

		/* 
			if current input is check, 
				then uncheck it. trigger unselected event

			if current input is unchecked,
				check it, and uncheck all others. 
		*/
		// this is triggered after default event handler
		if(!e.target.checked) {
			// uncheck is default behavior, no need to do it here
			cmdChannel.trigger('unselected');
		} else {
			// check is default behavior, no need to do it manually
			this.$checkBoxes.each(function(index, item){
				if(item !== e.target) {
					item.checked = false; 
				}
			});
			cmdChannel.trigger('selected', invoiceId);
		}
	},
	onRender: function () {
		console.log('onRender sent.composite');
	}
});

module.exports = SentCompositeView;
