var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var _ = require('lodash');
var Template = require('../../../../models/template.model.js');
var EditView = Mn.LayoutView.extend({
	initialize: function () {
		var thisView = this;
		this.renderEventTriggered = false; 
		// load data
		var tpl = new Template();
		tpl.fetch()
			.then(function(results) {

				// data ready
				thisView.templates = results.templates;
				thisView.trigger('showTemplate');
			});

		this.on('showTemplate', function() {
			if(!thisView.templates) {
				console.log('template not ready');
				return;
			}
			if(!this.renderEventTriggered) {
				console.log('render not ready');
				return;
			}
			// render the 
			var tpl = thisView.templates[0];
			this.$el.append(tpl.html);
			$('#invoice-style').remove();
			var styleElm = $('<style id="invoice-style">').append(tpl.css); 
			this.$el.append(styleElm);
			// $('body').append(styleElm);
		});
	},
	template: require('./create.edit.layout.html'),
	onShow: function () {

	},
	onRender: function () {
		// render ready
		this.renderEventTriggered = true; 
		this.trigger('showTemplate');
	}
});

module.exports = EditView; 