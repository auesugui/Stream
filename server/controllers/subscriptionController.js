const User = require('../models/SubModel'); // { User }

const subscriptionController = {};

subscriptionController.createUser = (req, res, next) => {
  console.log('IM IN CREATEUSER');
  User.create(req.body)
    .then((data) => {
      console.log('in first promise chain');
      res.locals.users = data;
      return next();
    })
    .catch((err) => {
      console.log('Lol I broke');
      console.log(err);
      res.sendStatus(400);
      return next(err);
    });
};

subscriptionController.getUser = (req, res, next) => {
  console.log('im in getuser');
  User.find({ firstName: req.body.firstName })
    .then((data) => {
      res.locals.users = data;
      return next();
    })
    .catch((err) => {
      console.log('NOT WORKING');
      console.log(err);
      res.status(400);
      return next(err);
    });
};

// try {
//   User.find({ firstName: req.body.firstName }, function (err, users) {
//     if (res.body.firstName === User.find({ firstName: req.body.firstName })) {
//       res.locals.users = data;
//       return next();
//     }
//   });
// } catch (err) {
//   return res.send(err);
// }

module.exports = subscriptionController;
