var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mysql = require('mysql');
var port = process.env.PORT || 3000;


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
