var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var appData = require('../../../routes/_data.js');
var Company = require('../../../models/company.model.js');

var HeaderLayout = Mn.LayoutView.extend({
	initialize: function () {
		this.model = new Company(appData.company);
		console.log(appData.company);
	},
	bindings: {
		'.company .name': 'name',
		'.address .line1': 'addressLine1',
		'.address .line2': 'addressLine2',
		'.address .city': 'city',
		'.address .state': 'state',
		'.address .zip': 'zip'
	},
	template: require('./header.layout.html'),
	onRender: function () {
		if(this.model) {
			this.stickit();
		}
	},
	events: {},
	onAttach: function () {
		
	}
});

module.exports = HeaderLayout;