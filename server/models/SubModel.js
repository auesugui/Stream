const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI =
  'mongodb+srv://kennylee:123@cluster0.by4hv.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Cluster0',
  })
  .then(() => console.log('Connected to the Mongo database!'))
  .catch((error) => console.log(`Error connecting to database, ${error}`));

// sets a schema for the 'species' collection
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Where is the name'],
    min: [4, 'Too short. Please have at least four characters'],
  },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
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
