const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Job = require('../../models/Job');
const validateJobInput = require('../../validation/jobs');

router.get('/', (req, res) => {
	Job.find()
		.sort({ date: -1 })
		.then((jobs) => res.json(jobs))
		.catch((err) => res.status(404).json({ nojobsfound: 'No jobs found' }));
});

router.get('/user/:user_id', (req, res) => {
	Job.find({ user: req.params.user_id })
		.sort({ date: -1 })
		.then((jobs) => res.json(jobs))
		.catch((err) =>
			res.status(404).json({ nojobsfound: 'No jobs found from that user' })
		);
});

router.get('/:id', (req, res) => {
	Job.findById(req.params.id)
		.then((job) => res.json(job))
		.catch((err) =>
			res.status(404).json({ nojobfound: 'No job found with that ID' })
		);
});

router.post(
	'/',
	passport.authenticate('jwt', { session: false }),
	(req, res) => {
		const { errors, isValid } = validateJobInput(req.body);

		if (!isValid) {
			return res.status(400).json(errors);
		}

		const newJob = new Job({
			company: req.body.company,
			position: req.body.position,
			location: req.body.location,
			status: req.body.status,
			postUrl: req.body.postUrl,
			description: req.body.description,
			notes: req.body.notes,
			contacts: req.body.contacts,
			user: req.user.id,
		});

		newJob.save().then((job) => res.json(job));
	}
);

router.post('/delete/:id', (req, res) => {
	Job.findByIdAndDelete({ _id: req.params.id })
		.then((job) => res.json(job))
		.catch((err) =>
			res.status(404).json({ nojobfound: 'No job found with that ID' })
		);
});

router.post('/edit/:id', (req, res) => {
	Job.findOneAndUpdate(
		{ _id: req.params._id },
		{
			company: req.body.company,
			position: req.body.position,
			location: req.body.location,
			status: req.body.status,
			postUrl: req.body.postUrl,
			description: req.body.description,
			notes: req.body.notes,
			contacts: req.body.contacts,
		}
	)
		.then((job) => res.json(job))
		.catch((err) =>
			res.status(404).json({ nojobfound: 'No job found with that ID' })
		);
});

module.exports = router;
