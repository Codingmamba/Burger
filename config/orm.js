var connect = require('./connection.js');

let controlls = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";  //?? - equals a columns or tables  ? - equals a value
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        console.log(result);
      });
    },
    insertOne: function(whatToSelect, table, orderCol) {
      var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        console.log(result);
      });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  
      connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
        console.log(result);
      });
    }
  };
  
  module.exports = controlls;