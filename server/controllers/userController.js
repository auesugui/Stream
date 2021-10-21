const User = require('../models/SubModel'); // { User }
const subscriptionController = {};

subscriptionController.createUser = (req, res, next) => {
  console.log('IM IN CREATEUSER');
  User.create(req.body)
    .then((data) => {
      res.locals.users = data;
      console.log(res.locals.users._id.valueOf());
      res.locals.userId = data._id.valueOf();
      return next();
    })
    .catch((err) => {
      console.log('Lol I broke');
      console.log(err);
      res.status(400); 
      return next(err);
    });
};

// login verification
// request body: {email: '', password: ''}
// response: {userId: _id}
subscriptionController.verifyUser = (req, res, next) => {
  console.log('im in verifyUser');
  
  User.find({ email: req.body.email })
    .then((data) => {
      // check if any matches for email
      if (!data.length) {
        return next( {
          log: 'account not found',
          status: 400,
          message: { err: 'account not found' },
        });
      }
      
      // check password
      if (req.body.password === data[0].password) {
        res.locals.result = { userData: data[0] };
        return next();
      } 
      else {
        return next({
          log: 'incorrect password',
          status: 400,
          message: { err: 'incorrect password' },
        });
      }
    })
    .catch((err) => {
      console.log('NOT WORKING');
      res.status(400);
      return next(err);
    });
};

// for dashboard
subscriptionController.returnUserInfo = (req, res, next) => {
  console.log('in returnUserInfo');

  User.findById(req.params.id)
    .then((data) => {
      console.log(data);
      res.locals.users = data;

      if (!data) {
        const errObject = {
          log: 'Error: error in returnUserInfo',
          status: 400,
          message: { err: 'no user by this id' }
        };
        return next(errObject);
      }

      return next();
    })
    .catch((err) => {
      console.log('NOT WORKING');
      const errObject = {
        log: 'Error: error in returnUserInfo',
        status: 400,
        message: { err: 'error in returnUserInfo' }
      };
      return next(errObject);
    });
};

subscriptionController.addSubscription = (req, res, next) => {
  console.log('im in addsub');
  // User.find({ _id: req.params.id }).then((data) => {
  // console.log(data[0].subs);
  // return next;\\
  // User.updateOne(
  User.findByIdAndUpdate(req.params.id,
    // { _id: req.params.id },
    // {
    // $set: {
    //   'subs.name': req.body.name,
    //   'subs.cost': req.body.cost,
    //   'subs.startDate': req.body.startDate,
    // },
    {$push: {
      subs: {
        name: req.body.name,
        cost: req.body.cost,
        startDate: req.body.startDate,
      }
    }},
    { new:true }
    // }
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
