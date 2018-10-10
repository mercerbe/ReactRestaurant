//=================dependencies====================//
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//================================================//

//=================Schema========================//
const AdminSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
//================================================//

module.exports = Admin = mongoose.model("admins", AdminSchema);
