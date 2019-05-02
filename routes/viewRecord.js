var express = require('express');
var router = express.Router();
var User = require('../models/users');
var passport = require('passport');

/* GET home page. */

//view records function
router.get('/', function(req, res, next) {

  User.find({}, function(err,user){
    if(err){throw err;}
    else{
      console.log(user);
      res.render('viewRecord', {users:user});
      //console.log(users);
    }
  });
});

module.exports = router;



// view record function ends