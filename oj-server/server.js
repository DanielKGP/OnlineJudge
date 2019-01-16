var express = require("express");
var app = express()
var restRouter = require("./routes/rest");

app.use("/api/v1", restRouter);

app.get('/', function (req, res){
    res.send('Hello Express World!')
})


app.listen(3000, function () {
    console.log('App listening on port 3000!')
})