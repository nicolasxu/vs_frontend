var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var appData = require('../../../routes/_data.js');

var HeaderLayout = Mn.LayoutView.extend({
	initialize: function () {},
	template: require('./header.layout.html'),
	onRender: function () {},
	events: {},
	onAttach: function () {
		
	}
});

module.exports = HeaderLayout;