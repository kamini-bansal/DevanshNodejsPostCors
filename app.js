var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function(req, res){
    console.log("Request"+req);
    console.log("Request body"+req.body);
    console.log("Request body"+req.body.name);
    var returnString= req.body.name.toString();
    res.send(returnString);
});

app.listen(3000);





//
// app.post("/", function (req, res) {
//     console.log(req.body.user.name)
// });
