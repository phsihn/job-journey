const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateJobInput(data) {
	let errors = {};

	data.company = validText(data.company) ? data.company : '';
	data.position = validText(data.position) ? data.position : '';
	data.status = validText(data.status) ? data.status : '';

	if (Validator.isEmpty(data.company)) {
		errors.text = 'Company field is required';
	}
	if (Validator.isEmpty(data.position)) {
		errors.text = 'Position field is required';
	}
	if (Validator.isEmpty(data.status)) {
		errors.text = 'Status field is required';
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0,
	};
};
