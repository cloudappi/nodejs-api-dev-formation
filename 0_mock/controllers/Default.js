'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.usersGET = function usersGET (req, res, next) {
  Default.usersGET(req.swagger.params, res, next);
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  Default.usersPOST(req.swagger.params, res, next);
};

module.exports.usersUserIdDELETE = function usersUserIdDELETE (req, res, next) {
  Default.usersUserIdDELETE(req.swagger.params, res, next);
};

module.exports.usersUserIdPUT = function usersUserIdPUT (req, res, next) {
  Default.usersUserIdPUT(req.swagger.params, res, next);
};
