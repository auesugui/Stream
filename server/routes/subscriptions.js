const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');
const router = express.Router();

// add a subscription for a user
router.post('/:id', subscriptionController.addSubscription, (req, res) => {
  res.status(200).json({...res.locals.users});
});

// delete a subscription for a user
router.delete('/:id/:subId', subscriptionController.deleteSubscription, (req, res) => {
  res.sendStatus(200);
});

// update a subscription
router.put('/:id/:subId', subscriptionController.updateSubscription, (req, res) => {
  res.sendStatus(200);
});


module.exports = router;