// initial setup
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const app = express();
const passport = require('passport');

// routes
const users = require('./routes/api/users');

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB successfully'))
	.catch((err) => console.log(err));

//app.get('/', (req, res) => res.send('Hello World!!'));

// binding middleware
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
