var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var _ = require('lodash');

var EditView = Mn.LayoutView.extend({
	initialize: function () {

	},
	template: require('./create.edit.layout.html'),
	onShow: function () {
		
	}
});

module.exports = EditView; 