var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');

var cmdChannel = require('./cmdChannel.js');

var SentCmdLayout = Mn.LayoutView.extend({
	initialize: function () {
		
		cmdChannel.on('void', function(msg){
			console.log('void invoice triggered, msg: ' + msg);
		});
		cmdChannel.trigger('void', 'do it');

		cmdChannel.on('selected', function(invoiceId) {
			console.log(invoiceId);
		})

		cmdChannel.on('unselected', function() {
			console.log('unselected');
		});

	}, 
	template: require('./sent.cmd.layout.html'),
	onBeforeShow: function () {

	}
});

module.exports = SentCmdLayout;