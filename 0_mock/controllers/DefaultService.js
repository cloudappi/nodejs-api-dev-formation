'use strict';

exports.usersGET = function(args, res, next) {
  /**
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "surname" : "aeiou",
  "name" : "aeiou",
  "id" : "aeiou",
  "email" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.usersPOST = function(args, res, next) {
  /**
   *
   * userRequest UserRequest_1 Fields required to create/update an user
   * no response value expected for this operation
   **/
  res.end();
}

exports.usersUserIdDELETE = function(args, res, next) {
  /**
   *
   * userId String id field of the user to be operated
   * no response value expected for this operation
   **/
  res.end();
}

exports.usersUserIdPUT = function(args, res, next) {
  /**
   *
   * userRequest UserRequest_2 Fields required to create/update an user
   * userId String id field of the user to be operated
   * no response value expected for this operation
   **/
  res.end();
}

