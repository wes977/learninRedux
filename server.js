"user scrict"
var express = require('express');
var app = express();
var path =  require('path');

// MIDDLEWARE TO DEFIEN FOLDER FOR STATIC FILES
app.use(express.static('public'));
app.get('/', function(reg, res){
  res.sendFile(path.resolve(__disname,'public','index.html'))
})

app.listen(3000, function(){
  console.log('Web server is listening on port 3000');
})
