const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI = 'yourURIHere.com';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Cluster0',
  })
  .then(() => console.log('Connected to the Mongo database!'))
  .catch((error) => console.log(`Error connecting to database, ${error}`));

//make our code look cleaner
const reqString = {
  type: String,
  required: true,
};

//create another schema that'll go into our subscription key.
const subSchema = new Schema({
  name: reqString,
  cost: { type: Number },
  startDate: { type: Date, default: Date.now, required: true },
});

// sets a schema for the 'species' collection
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Where is the name'],
    min: [1, 'Too short. Please have at least one character'],
  },
  lastName: reqString,
  //The select false results in no password being returned in a get request.
  password: { type: String, required: true, select: false },
  email: { type: String, unique: true },
  subs: [subSchema],
  // subscriptions: {
  //   //There could be multiple subscriptions. Using a One-to-many relationship pattern
  //   subcriptionTo: { type: String },
  //   Details: { Expiration: { type: Number }, Expense: { type: Number } },
  // },
});

// creats a model for the 'User' collection that will be part of the export
const User = mongoose.model('UserAcc', userSchema);

// exports all the models in an object to be used in the controller
module.exports = User;
