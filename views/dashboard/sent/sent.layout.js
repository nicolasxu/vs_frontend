var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');

var SentCompositeView = require('./sentComposite/sent.composite.js');

var SentLayout = Mn.LayoutView.extend({
	initialize: function() {

	},
	template: require('./sent.layout.html'),
	onRender: function() {
		this.addRegion('command', '#command-region');
		this.addRegion('list', '#list-region');
		this.addRegion('pagination', '#pagination-region');
	},
	onBeforeShow: function() {
		this.showChildView('list', new SentCompositeView());
	}
});

module.exports = SentLayout;