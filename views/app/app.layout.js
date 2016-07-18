var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../models/_api.js');
var appData = require('../../routes/_data.js');

var AppLayout = Mn.LayoutView.extend({
	initialize: function () {

	},
	el: 'body',
	template: require('./app.layout.html'),
	regions: {
		app_region: '#app-region'
	}
});

module.exports = AppLayout;