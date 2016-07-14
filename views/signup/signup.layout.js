var Mn = require('backbone.marionette');
require('backbone.stickit');
var User = require('../../models/user.model.js');
var $ = require('jquery');

var SignupLayout = Mn.LayoutView.extend({
	initialize: function () {

		this.model = new User({email:'', password: '', password_repeat: ''});
		var thisView = this;

		this.model.on('change:email', function (evt) {
			var result = this.validate_email();
			if(result === 'valid') {
				thisView.$emailInputFromGroup.addClass('has-success');
				thisView.$emailInputFromGroup.removeClass('has-error');

			} else if(result === 'invalid') {

				thisView.$emailInputFromGroup.addClass('has-error');

			} else {
				// empty
				thisView.$emailInputFromGroup.removeClass('has-success has-error');
			}

			if(!this.isAllValid()) {
				thisView.$sbBtn.addClass('disabled');
			} else {
				thisView.$sbBtn.removeClass('disabled');
			}
		});

		this.model.on('change:password', function (evt) {

			var result = this.validate_password();
			if(result === 'valid') {
				thisView.$passwordInput.addClass('has-success');
				thisView.$passwordInput.removeClass('has-error');

			} else if(result === 'invalid') {

				thisView.$passwordInput.addClass('has-error');

			} else {
				// empty
				thisView.$passwordInput.removeClass('has-success has-error');
			}

			if(!this.isAllValid()) {
				thisView.$sbBtn.addClass('disabled', '');
			} else {
				thisView.$sbBtn.removeClass('disabled', '');
			}
		});

		this.model.on('change:password_repeat', function(evt) {
			var result = this.validate_password_repeat();
			if(result === 'valid') {
				thisView.$passwordInput2.addClass('has-success');
				thisView.$passwordInput2.removeClass('has-error');

			} else if(result === 'invalid') {

				thisView.$passwordInput2.addClass('has-error');

			} else {
				// empty
				thisView.$passwordInput2.removeClass('has-success has-error');
			}

			if(!this.isAllValid()) {
				thisView.$sbBtn.addClass('disabled', '');
			} else {
				thisView.$sbBtn.removeClass('disabled', '');
			}

		});

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
		// cache
		this.$emailInputFromGroup = $('#InputEmail', this.$el).closest('.form-group');
		this.$passwordInput = $('#InputPassword1', this.$el).closest('.form-group');
		this.$passwordInput2 = $('#InputPassword2', this.$el).closest('.form-group');
		this.$sbBtn = $('#signup-submit', this.$el);

	}, 
	events: {
		'click #signup-submit': function(e) {

			e.preventDefault();

			this.model.signup();
		}
	}
});


module.exports = SignupLayout;


