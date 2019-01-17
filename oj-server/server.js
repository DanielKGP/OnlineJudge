var express = require("express");
var app = express()
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://kk:kkkkkk123@ds259144.mlab.com:59144/oj");

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use("/api/v1", restRouter);

app.get('/', function (req, res){
    res.send('Hello Express World!')
})


app.listen(3000, function () {
    console.log('App listening on port 3000!')
})