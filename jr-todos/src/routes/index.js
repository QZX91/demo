const express = require('express');
const taskRouter = require('./tasks');

const v1Router = express.Router();

v1Router.use('/tasks', taskRouter);

module.exports = v1Router;