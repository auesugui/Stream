const User = require('../models/SubModel'); // { User }
const subscriptionController = {};

subscriptionController.addSubscription = (req, res, next) => {
  console.log('im in addsub');
  
  User.findByIdAndUpdate(req.params.id,
    {$push: {
      subs: {
        name: req.body.name,
        cost: req.body.cost,
        renewalDate: req.body.renewalDate,
      }
    }},
    { new:true }
  )
    .then((data) => {
      res.locals.users = data;
      console.log(res.locals.users);
      return next();
    })
    .catch((err) => {
      console.log('NOT WORKING');
      console.log(err);
      res.status(400);
      return next(err);
    });
};

// delete subscription
subscriptionController.deleteSubscription = (req, res, next) => {
  console.log('in deleteSubscription');
  console.log('params:', req.params);

  // find and delete by subscription id?
  User.findById(req.params.id)
    .then((user) => {
      user.subs.id(req.params.subId).remove();
      
      user.save((err) => {
        if (err) return next(err);
        return next();
      });
    })
    .catch((err) => {
      return next(err);
    });
};

subscriptionController.updateSubscription = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      user.subs.id(req.params.subId).name = req.body.name;
      user.subs.id(req.params.subId).cost = req.body.cost;
      user.subs.id(req.params.subId).renewalDate = req.body.renewalDate;

      user.save((err) => {
        if (err) return next(err);
        return next();
      });
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = subscriptionController;
