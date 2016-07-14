var Mn = require('backbone.marionette');
var $ = require('jquery');
var api = require('./_api.js');

var User = Backbone.Model.extend({
	initialize: function () {
		console.log('initializing Author model...');
		// this.on('change:email', function (evt) {
		// 	console.log(evt);
		// });
	},
	validate: function () {
		console.log('validing user');
	}, 
	signup: function () {
		var userJson = {email: this.get('email'), password: this.get('password')};
		return api.user.signup(userJson);
	},
	login: function () {
		console.log('loging...');
		var userJson = {email: this.get('email'), password: this.get('password')};
		return api.user.login(userJson);
	},
	validate_email: function () {
		/*
		"empty"
		"valid"
		"invalid"
		*/
		if(this.attributes.email) {
			var re = /\S+@\S+\.\S+/;
			var result = re.test(this.attributes.email);
			if(result === true) {
				return 'valid';
			} else {
				return 'invalid';
			}
		}
		return 'empty';
	},
	validate_password: function () {
		/*
		"empty"
		"valid"
		"invalid"
		*/
		if(this.attributes.password) {
			if(this.attributes.password.length >=6) {
				return 'valid';
			} else {
				return 'invalid';
			}
		}
		return 'empty';
	},
	validate_password_repeat: function () {
		if(this.attributes.password_repeat) {
			if(this.attributes.password === this.attributes.password_repeat) {
				return 'valid';
			} else {
				return 'invalid';
			}
		}
		return 'empty';
	},
	isAllValid: function () {
		if(this.validate_email()          === 'valid' &&
			this.validate_password()        === 'valid' &&
			this.validate_password_repeat() === 'valid') {
			return true;
		} else {
			return false;
		}
	}

});

module.exports = User;
