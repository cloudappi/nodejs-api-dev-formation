'use strict';

/*
 * Dependencies
 */

// Express provides the HTTP server
const express = require('express');

// bodyParser allows JSON requests parsing
const bodyParser = require('body-parser');

// Writting constants in code is ugly. With this library
// we write httpStatus.NOT_FOUND instead of 404, which makes
// the code easier to read and understand
const httpStatus = require('http-status');

// This library is used to avoid introducing databases in the
// example.
const FakeModel = require('simple-fake-model');

/*
 * Configuration
 */
const app = express();
app.use(bodyParser.json());

// This replaces a object which knows how to read,
// create, update and delete users from a real database.
const model = new FakeModel();

// Some starting data
model.insert({
  email: 'francisco.canela@cloudappi.net',
  name: 'Francisco',
  surname: 'Canela'
});

/*
 * Routes
 */

// TODO: Here goes the routes

/*
 * Start
 */
const port = 8080;
app.listen(port, function() {
  console.log('Magic happening at port ' + port);
});
