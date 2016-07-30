var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');

var cmdChannel = require('./createChannel.js');

var CreateCmdLayout = Mn.LayoutView.extend({
	initialize: function () {
		
		cmdChannel.on('send', function(invoiceJson){
			console.log('void invoice triggered, msg: ' + invoiceJson);
		});
		cmdChannel.trigger('send', 'on send invoice');
	},
	className: 'cmd-wrapper', 
	template: require('./create.cmd.layout.html'),
	onBeforeShow: function () {

	},
	events: {
		'click .goback-btn': function (e) {

			window.history.back();
		}
	}
});

module.exports = CreateCmdLayout; 