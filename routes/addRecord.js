var express = require('express');
var router = express.Router();

var User= require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addRecord', { title: 'Express' });
});

router.post('/', function(req,res,next){
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var email= req.body.email;
  var userName= req.body.userName;
  var phoneNumber= req.body.phoneNumber;

  //console.log(firstName);

  req.checkBody('firstName' , 'First Name is required').notEmpty();
  req.checkBody('lastName' , 'Last Name is required').notEmpty();
  req.checkBody('email' , 'Email is required').notEmpty();
  req.checkBody('userName' , 'Username is required').notEmpty();
  req.checkBody('phoneNumber' , 'Phone Number is required').notEmpty();

  var error = req.validationErrors();
  
  if(error)
  {
    throw error;
  }
  else
  {

  var newUser = new User({
    email: email,
    firstName:firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    username:userName
  });
console.log('User Created');
  User.createUser(newUser, function(err, user){
    if(err){throw err;}
     else{'User not created'};
     console.log(user);
     req.flash('success_msg', 'You are added and can now view data');
     res.redirect('/')

   });
  }
});



module.exports = router;
