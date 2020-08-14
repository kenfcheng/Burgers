// Import the ORM
let orm = require("../config/orm.js");
// Declares Burgers as a function
const burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // Creates and Updates Burgers
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for burger_controllers.js
module.exports = burgers;
