// const express = require('express');
// const app = express()
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
//
//
// app.get('/',function(req,res){
//     res.render('index.ejs')
// })
//
// io.sockets.on('connection',function(socket){
//   socket.on('username', function(username){
//     socket.username = username;
//     io.emit('is_online','🔵<i>' +socket.username + ' Join the chat Now...');
//   });
//   socket.on('disconnectt',function(username){
//     io.emit(' is_online ','<i>'+socket.username+' left the chat ');
//   });
//   socket.on('chat_message',function(message){
//     io.emit('chat_message','🔴<stromg>'+socket.username+ " <strong>:" +message)
//   });
// })

// app.listen(3000,function(){
//     console.log("server is got running on port number 3000");
//
// })
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.render('index.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
    });

});

const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});
