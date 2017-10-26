let connect = require('./connection.js');

let controlls = {
    selectAll: function(burgerInput) {
      let queryString = "SELECT * FROM ??";  //?? - equals a columns or tables  ? - equals a value
      connection.query(queryString, [burgerInput], function(err, result) {
        console.log(result);
      });
    },
    insertOne: function(whatToSelect, table, orderCol) {
      let queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
      console.log(queryString);
      connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
        console.log(result);
      });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
      let queryString = "SELECT ??";
      connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
        console.log(result);
      });
    }
  };
  
  module.exports = controlls;