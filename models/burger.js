var orm = require("../config/orm.js");

var burger = {
    addBurger: function(name, cb) {
        orm.insertOne(name, function(res) {
          cb(res);
        });
      },
      devourBurger: function(burgerID, cb) {
        orm.updateOne(burgerID, function(res) {
          cb(res);
        });
      },
      showBurgers: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },
      deleteBurger: function(burgerID, cb) {
        orm.deleteOne(burgerID, function(res) {
          cb(res);
        });
      }
};

module.exports = burger;