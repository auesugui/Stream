const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI = '';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'myAppDB',
  })
  .then(() => console.log('Connected to the Mongo database!'))
  .catch((error) => console.log(`Error connecting to database, ${error}`));

// sets a schema for the 'species' collection
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // subscriptions:
});

// creats a model for the 'User' collection that will be part of the export
const User = mongoose.model('UserAcc', userSchema);

// exports all the models in an object to be used in the controller
module.exports = {
  User,
};
