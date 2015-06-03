/**
 * Created by rohitghatol on 5/4/15.
 */
var PORT = 8080;
var express = require('express');

var app = express();



app.use( express.static(__dirname+'/public' ));
app.use('/bower_components', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(PORT,function(){
  console.log('App running on PORT 8080');
})