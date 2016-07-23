var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');

var SentCompositeView = require('./sentComposite/sent.composite.js');
var SentCmdLayout = require('./sentCommand/sent.cmd.layout.js');

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
		this.showChildView('command', new SentCmdLayout());
	}
});

module.exports = SentLayout;