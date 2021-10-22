const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const apiRouter = require('./routes/api');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const subscriptionsRouter = require('./routes/subscriptions');

//requiring routers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle requests for static files
app.use(express.static(path.resolve(__dirname, '../public'))); //GET A BETTER EXPLANATION ON WHAT EXPRESS.STATIC DOES.

//get request for linking our html and css

//***if we input the asterisk on this get request, the request stops on line 19, and does not proceed to line 21***
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../public/index.html')); //path - server.js/public/index.html || resolve - public/index.html
});

app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);
app.use('/api', apiRouter);

app.use('/assets', express.static(path.join(__dirname, '../client/assets')));

//global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 500,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(200).json(errorObj.message);
});

//listening to port
app.listen(port, () => console.log(`Listening on port ${port}`));

//is this to have our front end talk to our back end?
module.exports = app;
