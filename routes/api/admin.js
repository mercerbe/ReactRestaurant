//=================dependencies====================//
const express = require("express");
const router = express.Router();
//admin model
const Admin = require("../../models/Admin");
//gravatar
const gravatar = require("gravatar");
//bcrypt
const bcrypt = require("bcryptjs");
//json web tokens
const jwt = require("jsonwebtoken");
//key for JWT
const keys = require("../../config/keys");
//passport
const passport = require("passport");
//================================================//

//===================validation=======================//
const validateLoginInput = require("../../validation/login");
//================================================//

//=================routes========================//
//@route GET api/admins/test
//@desc Tests admin route
//@access Public
router.get("/test", (req, res) =>
  res.json({ msg: "admin route test is working" })
);

//@route POST api/admins/register
//@desc Register a new admin
//@access Public
// router.post("/register", (req, res) => {
//   //validation
//   const { errors, isValid } = validateRegisterInput(req.body);
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//
//   Admin.findOne({ email: req.body.email }).then(admin => {
//     //admin email already registered
//     if (admin) {
//       errors.email = "An account with this email address already exists.";
//       return res.status(400).json(errors);
//       //create new admin
//     } else {
//       //gravatar
//       const avatar = gravatar.url(req.body.email, {
//         s: "200", //size
//         r: "pg", //rating
//         d: "mm" //default image
//       });
//       //new admin
//       const newAdmin = new Admin({
//         name: req.body.name,
//         email: req.body.email,
//         avatar: avatar,
//         password: req.body.password
//       });
//       //bcrypt for password encryption
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newAdmin.password, salt, (err, hash) => {
//           if (err) {
//             throw err;
//           }
//           newAdmin.password = hash;
//           newAdmin
//             .save()
//             .then(admin => res.json(admin))
//             .catch(err => console.log(err));
//         });
//       });
//     }
//   });
// });

//@route GET api/admins/login
//@desc login an existing admin and return JWT token
//@access Public
router.post("/login", (req, res) => {
  //validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //find admin via email
  Admin.findOne({ email: req.body.email }).then(admin => {
    //check admin
    if (!admin) {
      errors.email = "No admins registered with this email address.";
      return res.status(404).json(errors);
    }
    //check password
    bcrypt.compare(password, admin.password).then(isMatch => {
      if (isMatch) {
        //Admin match success
        const payload = {
          id: admin.id,
          name: admin.name,
          avatar: admin.avatar
        }; //JWT payload
        //Sign Token...expire in 1 hour for security
        jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
            msg: "Successful sign in."
          });
        });
      } else {
        errors.password = "Password does not match email provided.";
        return res.status(400).json(errors);
      }
    });
  });
});
//@route GET api/admins/current
//@desc Return current admin
//@access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //test response token
    res.json({
      msg: "Success, current token still valid with " + req.admin.name
    });
  }
);
//===============================================//

module.exports = router;
