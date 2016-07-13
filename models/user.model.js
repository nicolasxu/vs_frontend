var Mn = require('backbone.marionette');


var User = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Author model...');
	}
});

module.exports = User;
