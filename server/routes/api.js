const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//There is an issue where if we go into any of the signup/login middlewares and incorrectly put in a post/get for either, it'll keep going.
router.post('/', userController.createUser, (req, res) => {
  // console.log('res.locals.users: ', res.locals.users[0]._id.toString());
  res.status(200).json({
    userId: res.locals.userId
  });
});

//grabbing user_id information specifically
//Figure out how to grab unique ids in the get request. <==
router.get('/:id', userController.returnUserInfo, (req, res) => {
  // console.log('res.locals.users:', res.locals.users);
  res.status(200).json(res.locals.users);
});

//Make update and delete requests for users and subs
// router.put('/', subscriptionController.updateUser, (req, res) => {});

// router.delete('/', subscriptionController.deleteUser, (req, res) => {});
//AFter figuringo out the unique id, try to figure out this delete function

module.exports = router;
