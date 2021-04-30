const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv').config();
const { connectToDB } = require('./mongodb');
const app = express();
app.use(express.json());
connectToDB();
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);
app.use(logger('tiny'));
app.use(routes);

app.use((req, res, next) => {
	const err = new Error(`${req.method} ${req.url} Not Found`);
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message,
		},
	});
});

app.listen(PORT, () => {
	console.log(
		`Express Server started on Port ${app.get(
			'port'
		)} | Environment : ${app.get('env')}`
	);
});
