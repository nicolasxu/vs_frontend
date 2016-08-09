var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var _ = require('lodash');

var CmdLayout = require('./createCommand/create.cmd.layout.js');
var EditLayout = require('./createEdit/create.edit.layout.js');

var CreateLayout = Mn.LayoutView.extend({
	initialize: function () {

	},
	className: '',
	template: require('./create.layout.html'),
	onRender: function () {
		this.addRegion('command', '#create-cmd-region');
		this.addRegion('edit', '#create-edit-region');

		console.log('onShow in create invoice layout...');
	},
	onBeforeShow: function () {
		this.showChildView('command', new CmdLayout());
		this.showChildView('edit', new EditLayout());

	}
});

module.exports = CreateLayout;

