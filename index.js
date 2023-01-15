const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
	socket.on("msg",function(msg,name){
		io.emit("msg",msg,name)
	});
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
