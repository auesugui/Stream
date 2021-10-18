const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');
const router = express.Router();

//There is an issue where if we go into any of the signup/login middlewares and incorrectly put in a post/get for either, it'll keep going.
router.post('/', subscriptionController.createUser, (req, res) => {
  console.log('callback function');
  // console.log('res.locals.users: ', res.locals.users[0]._id.toString());
  res.json(res.locals.users._id.valueOf());
});

//Handles login and returns the unique ID of the user. Already verifies if email and password are correct.
router.get('/', subscriptionController.getUser, (req, res) => {
  console.log('I found the user');
  console.log(res.locals.users);
  // console.log('res.locals.users:', res.locals.users[0]._id.toString());
  res.json(res.locals.users[0]._id.valueOf());
});

//grabbing user_id information specifically
//Figure out how to grab unique ids in the get request. <==
router.get('/:id', subscriptionController.returnUserInfo, (req, res) => {
  console.log('I found the user');
  console.log('res.locals.users:', res.locals.users);
  res.json(res.locals.users);
});

router.post('/:id', subscriptionController.addSubscription, (req, res) => {
  console.log('I found the user');
  // console.log('res.locals.users:', res.locals.users);
  res.json(res.locals.users);
});

//Make update and delete requests for users and subs
// router.put('/', subscriptionController.updateUser, (req, res) => {});

// router.delete('/', subscriptionController.deleteUser, (req, res) => {});
//AFter figuringo out the unique id, try to figure out this delete function

module.exports = router;
