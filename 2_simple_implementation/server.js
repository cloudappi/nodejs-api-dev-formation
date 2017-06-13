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
const FakeModel = require('sync-simple-fake-model');

/*
 * Configuration
 */
const app = express();
app.use(bodyParser.json());

// This replaces a object which knows how to read,
// create, update and delete users from a real database.
const model = new FakeModel();

model.insert({
  email: 'marcoantonio.sanz@cloudappi.net',
  name: 'Marco Antonio',
  surname: 'Sanz'
});

model.insert({
  email: 'francisco.canela@cloudappi.net',
  name: 'Francisco',
  surname: 'Canela'
});

model.insert({
  email: 'jorge.baumann@cloudappi.net',
  name: 'Jorge',
  surname: 'Baumann'
});

/*
 * Routes
 */

// GET /users -- Get all users
function getAllUsersController(request, response) {
  const users = model.list()

  response.status(httpStatus.OK).json(users);
}
app.get('/users', getAllUsersController);

// POST /users -- Create new user
function createUserController(request, response) {
  const userData = request.body;
  delete userData.password;

  const newUser = model.insert(userData);

  response.status(httpStatus.CREATED).json(newUser);
}
app.post('/users', createUserController);

// DELETE /users/:userId -- Delete an user
function deleteUserController(request, response) {
  const userId = request.params.userId;

  model.deleteById(userId);

  response.status(httpStatus.NO_CONTENT).send();
}
app.delete('/users/:userId', deleteUserController);

// PUT /users/:userId -- Modifies an user
function updateUserController(request, response) {
  const userId = request.params.userId;
  const newValues = request.body;

  model.updateById(userId, newValues)

  response.status(httpStatus.NO_CONTENT).send();
}
app.put('/users/:userId', updateUserController);

/*
 * Start
 */
const port = 8080;
app.listen(port, function() {
  console.log('Magic happening at port ' + port);
});
