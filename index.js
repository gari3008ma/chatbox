const app = require('express') ();
const http = require('http').Server(app);
const io = require ('socket.io')(http);


app.get('/', function(req,res){
     res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    socket.on('chat message',function(mes){
        io.emit('chat message',mes);
    });
});


http.listen(3008,function(){
    console.log('Listening to port 3008');
});
