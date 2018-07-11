const app = require('express')()
const server = require('http').createServer(app);
const port = 3000;


server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
//server.listen(port,  () => console.log(`Server is listening on ${port}`));
io = require('socket.io')()
io.listen(server)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

});


