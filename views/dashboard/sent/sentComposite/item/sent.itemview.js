var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var _ = require('lodash');

var InvoiceItem = Mn.ItemView.extend({
	initialize: function() {

	},
	tagName: 'li',
	template: function(modelJson) {
		var tpl = require('./sent.itemview.html');
		var tplFunc = _.template(tpl);
		var result = tplFunc(modelJson);
		return result;

	},
	// require('./sent.itemview.html'),
	bindings: {

	},
	onShow: function () {

	}
});

module.exports = InvoiceItem;