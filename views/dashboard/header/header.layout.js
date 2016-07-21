var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var appData = require('../../../routes/_data.js');
var Company = require('../../../models/company.model.js');
var User = require('../../../models/user.model.js');

var HeaderLayout = Mn.LayoutView.extend({
	initialize: function () {
		this.model = new Company(appData.company);
		this.userModel = new User(appData.user);
	},
	bindings: {
		'.company .name': 'name',
		'.address .line1': 'addressLine1',
		'.address .line2': 'addressLine2',
		'.address .city': 'city',
		'.address .state': 'state',
		'.address .zip': 'zip'
	},
	userBindings: {
		'.user #user-email': 'email'
	},
	template: require('./header.layout.html'),
	onRender: function () {
		if(this.model) {
			this.stickit();
		}
		if(this.userModel) {
			this.stickit(this.userModel, this.userBindings);
		}
	},
	events: {},
	onAttach: function () {
		
	}
});

module.exports = HeaderLayout;