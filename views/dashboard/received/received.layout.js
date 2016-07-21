var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');

var ReceivedLayout = Mn.LayoutView.extend({
	initialize: function() {

	},
	bindings: {},
	template: require('./received.layout.html'),
	onRender: function() {
		this.addRegion('list-region', '#invoice-list');

	},
	onBeforeShow: function() {
		this.showChildView('list-region'          );
	}
});

module.exports = ReceivedLayout;

