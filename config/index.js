const mysql = require("mysql");


var connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "data"
});
connection.getConnection((err,res)=>{
  if(err){
    console.log(err);
  }
  console.log("connect data base success");
})


module.exports = connection;