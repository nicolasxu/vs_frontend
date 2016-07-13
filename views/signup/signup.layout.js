var Mn = require('backbone.marionette');
require('backbone.stickit');
var User = require('../../models/user.model.js');
var $ = require('jquery');

var SignupLayout = Mn.LayoutView.extend({
	initialize: function () {
		console.log('singup view initializing...');
		this.model = new User({email:'', password: '', password_repeat: ''});
	},
	el: '#app-container',
	template: require('./signup.layout.html'),
	bindings: {
		'#InputEmail': 'email',
		'#InputPassword1': 'password',
		'#InputPassword2': 'password_repeat'
	},
	onRender: function() {

		if(this.model) {
			this.stickit();
		}
	}, 
	events: {
		'click #signup-submit': function(e) {

			e.preventDefault();
			console.log('clicked');
			this.model.signup();
		}
	}
});


module.exports = SignupLayout;


