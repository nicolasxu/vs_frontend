var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../models/_api.js');
var appData = require('../../routes/_data.js');
var Nav = require('./nav/nav.layout.js');
var Header = require('./header/header.layout.js');
var Sent = require('./sent/sent.layout.js');
var CreateCompanyModal = require('./_create_company_modal/create_company_modal.js');
var Create = require('./create/create.layout.js');

var DashboardLayout = Mn.LayoutView.extend({
	initialize: function () {
	},
	// el: '#app-container',
	template: require('./dashboard.layout.html'),
	regions: {
		/* Building region is only trigger during the new */
	},
	onBeforeRender: function () {
	
	},
	onRender: function () {
		this.addRegion('nav', '#vs-nav-region');
		this.addRegion('header', '#vs-header-region');
		this.addRegion('content', '#vs-content-region');
		this.addRegion('modal', '#vs-modal');

	},
	onBeforeShow: function () {
		
		this.showChildView('header', new Header());
		
		switch (this.options.content) {
			case 'sent': 
				this.showChildView('nav', new Nav());
				this.showChildView('content', new Sent());

				break;
			case 'received':
			break;
			case 'clients':
			break;
			case 'vendors':
			break;
			case 'create':
				this.showChildView('content', new Create());
				break;
		}

	},
	onShow: function() {

		// pop the dialog
		if(!appData.company) {
			var ccModal = new CreateCompanyModal();
			this.modal.show(ccModal);
			ccModal.showModal();
		}
	},
	onBeforeDestroy: function () {

	},
	onDestroy: function () {


	}
});

module.exports = DashboardLayout;