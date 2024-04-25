"use strict";

var express = require('express');

var _require = require('prisma/client'),
    PrismaClient = _require.PrismaClient;

var prisma = new PrismaClient();
var app = express(); //json

app.use(express.json()); //cors

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
}); //test api 

app.get('/test', function (req, res) {
  try {
    res.status(200).json({
      message: 'API is working'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}); //get all users

app.get('/users', function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(prisma.users.findMany());

        case 3:
          users = _context.sent;
          res.status(200).json({
            message: 'API is working'
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});