// import connection.js into orm.js
var connection = require("./connection.js");

var orm = {
  //display burger table
  selectAll: function(cb) {
    var query = "SELECT * FROM burgers";
    connection.query(query, function(err, res) {
      if(err) throw err;
      cb(res);
  });
}, 
  //adds user input burger
  insertOne: function(burger_name, cb) {
    var query = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
    connection.query(query, [name], function(err, res) {
      if(err) throw err;
      cb(res);
  });
},
  // devoured?
  updateOne: function(burgerID, cb) {
    var query = "UPDATE burgers SET devoured= ' ' + true + ' ' WHERE id=?";
    connection.query(query, [burgerID], function(err, res) {
      if (err) throw  err;
      cb(res);
  });
},
  //deletes one burger
  deleteOne: function(burgerID, cb) {
    var query = "DELETE FROM burgers WHERE ID = ? ";
    connection.query(query, [burgerID], function (err, res) {
      if(err) throw err;
      cb(res);
  }
  );
}
};
  // export orm object
  module.exports = orm;