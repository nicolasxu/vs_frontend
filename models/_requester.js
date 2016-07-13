var $ = require('jquery');

function postFn(url, payload) {
	return $.ajax({
		method: 'POST',
		url: url,
		data: payload
	});
}

function getFn(urlWithQueryString) {
	return $.ajax({
		method: 'GET',
		url: urlWithQueryString
	});
}

function putFn(url, payload) {
	return $.ajax({
		method: 'PUT',
		url: url,
		data: payload
	});
}

function deleteFn(url, payload) {
	return $.ajax({
		method: 'DELETE',
		url: url,
		data: payload
	});
}

module.exports = {
	get: getFn,
	post: postFn,
	put: putFn,
	delete: deleteFn
}