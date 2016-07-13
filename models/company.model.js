var Mn = require('backbone.marionette');


var Company = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Author model...');
	}
});

module.exports = Company;
