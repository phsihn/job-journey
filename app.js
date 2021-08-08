// initial setup
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const app = express();
const passport = require('passport');
const path = require('path');

// routes
const users = require('./routes/api/users');
const jobs = require('./routes/api/jobs');

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch((err) => console.log(err));

// binding middleware
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', users);
app.use('/api/jobs', jobs);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('frontend/build'));
	app.get('/', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
