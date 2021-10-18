const User = require('../models/SubModel'); // { User }

const subscriptionController = {};

subscriptionController.createUser = (req, res, next) => {
  console.log('IM IN CREATEUSER');
  User.create(req.body)
    .then((data) => {
      res.locals.users = data;
      console.log(res.locals.users._id.valueOf());
      return next();
    })
    .catch((err) => {
      console.log('Lol I broke');
      console.log(err);
      res.sendStatus(400);
      return next(err);
    });
};

//Update the find to verify for email/password
subscriptionController.getUser = (req, res, next) => {
  console.log('im in getuser');
  console.log(req.body);
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

subscriptionController.returnUserInfo = (req, res, next) => {
  console.log('req.params', req.params);
  console.log('req.body', req.body);
  console.log('I am doing something');
  // console.log("req", req);
  //try to find the location of the id in our request
  // if (req.params.id.equals(User._id.valueOf())) {
  //   console.log('true');
  // } else {
  //   console.log('false');
  // }
  User.find({ _id: req.params.id })
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

subscriptionController.addSubscription = (req, res, next) => {
  console.log('im in addsub');
  // User.find({ _id: req.params.id }).then((data) => {
  // console.log(data[0].subs);
  // return next;\\
  User.updateOne(
    { _id: req.params.id },
    {
      // $set: {
      //   'subs.name': req.body.name,
      //   'subs.cost': req.body.cost,
      //   'subs.startDate': req.body.startDate,
      // },
      $push: {
        subs: {
          name: req.body.name,
          cost: req.body.cost,
          startDate: req.body.startDate,
        },
      },
    }
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

// subscriptionController.updateUser = (req, res, next) => {};

// subscriptionController.deleteUser = (req, res, next) => {};

module.exports = subscriptionController;
