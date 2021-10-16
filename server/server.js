const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiRouter = require('./routes/api');

//requiring routers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle requests for static files
app.use(express.static(path.resolve(__dirname, '../public'))); //GET A BETTER EXPLANATION ON WHAT EXPRESS.STATIC DOES.

//get request for linking our html and css
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html')); //path - server.js/public/index.html || resolve - public/index.html
});

app.use('/user', apiRouter);

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listening to port
module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);

//is this to have our front end talk to our back end?
// module.exports = app;
