var express = require('express'),
app = express(),
port = 1234;

app.use(express.static(__dirname + '/build'));
app.listen(port);