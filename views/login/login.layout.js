var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var User = require('../../models/user.model.js');
var data = require('../../routes/_data.js');
var LoginLayout = Mn.LayoutView.extend({
	initialize: function () {
		this.model = new User({
			email: '',
			password: '', 
			message: ''
		});
		var thisView = this;

		// bind model change to validation function
	},
	el: '#app-container',
	template: require('./login.layout.html'),
	bindings: {
		'#InputEmail': 'email',
		'#InputPassword1': 'password', 
		'#login-msg': 'message'
	},
	returnMsgBindings: {
		'#login-msg': 'message'
	},
	onRender: function() {
		if(this.model) {
			this.stickit();

		}
		this.model.set({email:'', password:'', message:''});
		$('#login-msg', this.$el).hide();
	},
	events: {
		'click #login-submit': function (e) {
			e.preventDefault();
			var thisView = this;
			this.model.login()
				.then(function(result) {
					if(result.code === 2000) {
						data.user = result.user;
						// clear value
						console.log('login success...');
						// TODO: naviaget to dash board
						Backbone.history.navigate('/dashboard', true);
					} else {
						// update result to dom
						$('#login-msg', thisView.$el).show();
						thisView.model.set('message', result.message);
					}
				});
		}
	}
});

module.exports = LoginLayout;