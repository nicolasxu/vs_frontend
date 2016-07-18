var Mn = require('backbone.marionette');
require('backbone.stickit');
var $ = require('jquery');
var api = require('../../models/_api.js');
var appData = require('../../routes/_data.js');
var Nav = require('./nav/nav.layout.js');

var CreateCompanyModal = require('./_create_company_modal/create_company_modal.js');

var DashboardLayout = Mn.LayoutView.extend({
	initialize: function () {
	},
	el: '#app-container',
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


		this.showChildView('nav', new Nav());

		console.log('onRender dashboard.js');
		// pop the dialog
		if(appData.isLogin && !appData.company) {
			var ccModal = new CreateCompanyModal();
			this.modal.show(ccModal);
			ccModal.showModal();
		} 
		console.log(appData);
	},
	onDestroy: function () {
		console.log('dashboard onDestory...');
	}
});

module.exports = DashboardLayout;