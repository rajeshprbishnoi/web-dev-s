const express = require("express");
const http = require("http");

const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
	console.log("Data received from : ", socket.id);

	socket.on("login", (data) => {
		socket.join(data.username);
		socket.emit("logged_in");
	});

	socket.on("messageSend", (data) => {
		if (data.sendTo) {
			io.to(data.sendTo).emit("messageReceived", data);
		} else {
			socket.broadcast.emit("messageReceived", data);
		}
	});
});

app.use("/", express.static(__dirname + "/public"));

server.listen(3434, () => {
	console.log("Server running on http://localhost:3434");
});
