const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
  name:{
    type: String,
    reuiqred: true
  },
  email:{
    type: String,
    reuiqred: true
  },
  username:{
    type: String,
    reuiqred: true
  },
  password:{
    type: String,
    reuiqred: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
