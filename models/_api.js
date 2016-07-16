var request = require('./_requester.js');

module.exports = {
	user: {
		signup: function (user) {
			return request.post('http://localhost:3000/user', user);
		},
		login: function (user) {
			return request.post('http://localhost:3000/credential', user);
		},
		getInfo: function() {
			return request.get('http://localhost:3000/user');
		},
		logout: function () {
			return request.delete('http://localhost:3000/credential');
		}
	},
	company: {},
	client: {},
	vendor: {},
	request: {},
	invoice: {},

};