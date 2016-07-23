var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var _ = require('lodash');

var InvoiceItem = Mn.ItemView.extend({
	initialize: function() {

	},
	tagName: 'li',
	className: 'list-row', 
	template: function(modelJson) {
		var tpl = require('./sent.itemview.html');
		var tplFunc = _.template(tpl);
		var result = tplFunc({model: modelJson});
		return result;

	},
	// require('./sent.itemview.html'),
	bindings: {

	},
	onShow: function () {

	}
	// ,
	// events : {
	// 	'click .i-checker': 'checkerClicked'
	// },
	// ui: {
	// 	checkboxes: '.i-checker'
	// },
	// checkerClicked: function (e) {
	// 	// console.log(e);
	// 	console.log(this);

	// }
});

module.exports = InvoiceItem;