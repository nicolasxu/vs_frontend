var request = require('./_requester.js');
var appData = require('../routes/_data.js');
var Promise = require('bluebird');
module.exports = {
	user: {
		signup: function (user) {
			return request.post('http://localhost:3000/user', user);
		},
		login: function (user) {
			return request.post('http://localhost:3000/credential', user);
		},
		getInfo: function() {
			if(appData.user) {
				return new Promise.resolve({user: appData.user});
			} else {
				return request.get('http://localhost:3000/user');
			}
		},
		logout: function () {
			return request.delete('http://localhost:3000/credential');
		}
	},
	company: {
		getInfo: function () {
			if(appData.company) {
				return new Promise.resolve({company: appData.company});
			} else {
				return request.get('http://localhost:3000/company');
			}
		},
		create: function (company) {
			return request.post('http://localhost:3000/company', company);
		}
	},
	client: {},
	vendor: {},
	request: {},
	invoice: {},

};