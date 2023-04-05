var express = require('express');
var path = require('path');
var app = express();

app.get('/data.json', function (req, res) {
    res.sendFile(path.join(__dirname, '/json/data.json'));
})

app.listen(80, function () {
    console.log('Node server is running..');
});