var Mn = require('backbone.marionette');
var $ = require('jquery');
var api = require('./_api.js');

var User = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Author model...');
	},
	validate: function () {
		console.log('validing user');
	}, 
	signup: function () {

		var userJson = {email: this.get('email'), password: this.get('password')};
		api.user.signup(userJson)
			.then(function (res) {
				console.log('result of signup: ');
				console.log(res);
			});
		

	},
	login: function () {
		console.log('loging...');
	}
});

module.exports = User;
