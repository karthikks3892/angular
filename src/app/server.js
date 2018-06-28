var express = require('express');
var mysql = require('mysql');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var connection = mysql.createConnection({

    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'employees'
  
  });
  
  connection.connect();

  app.post('/app/contact-form/contact-form', function(req, res){
    var username=req.body.firstName;
    connection.query("INSERT INTO `emp_details` (firstName) VALUES (?)", username.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(username);
});