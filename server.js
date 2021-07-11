const express = require('express');
const bosyParser = require('body-parser')
const app = express()
const router = require('./router/index');

var header = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");

    next();
  };
app.use(bosyParser.json())
app.use(bosyParser.urlencoded({extended:true}))


app.use("/",header,router)
const PORT = process.env.PORT||3000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:`,PORT)
})