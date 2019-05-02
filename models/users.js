var mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log('connected to mongo db');
  });
  var db = mongoose.connection;

var UserSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        index: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUSer, callback){
    newUSer.save(callback);
}

module.exports.getUserByfirstName = function(firstName, callback){
    var query = {firstName: firstName};
    User.findOne(query, callback);
}

module.exports.getUserBylastName = function(lastName, callback){
    var query = {lastName: lastName};
    User.findOne(query, callback);
}

module.exports.getUserByemail = function(email, callback){
    var query = {email: email};
    User.findOne(query, callback);
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.getUserByphoneNumber = function(phoneNumber, callback){
    var query = {phoneNumber: phoneNumber};
    User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}