const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//requiring routers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request for linking our html and css
app.get('/');
