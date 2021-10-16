const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');
const router = express.Router();

router.post('/', subscriptionController.createUser, (req, res) => {
  console.log('callback function');
  console.log('res.locals.users: ', res.locals.users);
  res.json(res.locals.users);
});

router.get('/', subscriptionController.getUser, (req, res) => {
  console.log('I found the user');
  res.json(res.locals.users);
});

module.exports = router;
