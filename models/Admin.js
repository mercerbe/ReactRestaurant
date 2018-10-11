//=================dependencies====================//
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//================================================//

//=================Schema========================//
const AdminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});
//================================================//

module.exports = Admin = mongoose.model("admins", AdminSchema);
