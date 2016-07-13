var Company = require('./companies.model.js');
var Mn = require('backbone.marionette');


var CompanyCollection = Backbone.Collection.extend({
	model: Company
});


module.exports = CompanyCollection;
// the instance can be clients, or venders
