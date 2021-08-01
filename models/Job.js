const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},
	company: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: false,
	},
	status: {
		type: String,
		required: true,
	},
	postUrl: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	notes: {
		type: String,
		required: false,
	},
	contacts: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Job = mongoose.model('jobs', JobSchema);
