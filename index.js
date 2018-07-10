var express = require('express'),
        app = express(),
        http = require('http'),
        server = http.createServer(app),
        io = require('socket.io').listen(server),
        _ = require('underscore'),
        moment = require('moment'),
        request = require('request'),
        //waterfall = require('async-waterfall'),
        bodyParser = require('body-parser'),
        usernames = {},
        userIds = {},
        clients = [],
        users = [],
        onlineClient = [],
        clientInfo = {},
        mysql = require('mysql'),
        port = 3000;


//add body barser to accept post requests
app.use(bodyParser.urlencoded({
    extended: false
}));


//database connection with mysql

var connection = mysql.createConnection({
    host: 'puzzlecoder.com',
    user: 'wil_user',
    //password: 'notzft_$16@xyz',
    password: 'x-8}OpOz6m1T',
    //database: 'notsoforgetful_db'
    database: 'vefinder'
});

// parse application/json 
app.use(bodyParser.json());

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("error connecting database ... ");
    }
});

//start chat server
server.listen(port);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
