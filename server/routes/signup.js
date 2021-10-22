const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.createUser, (req, res) => {
  // console.log('res.locals.users: ', res.locals.users[0]._id.toString());
  res.status(200).json({ 
    userData: res.locals.userData,
  });
});

module.exports = router;