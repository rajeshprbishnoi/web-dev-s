const express = require("express");
const http = require("http");

const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
	console.log("Data received from : ", socket.id);

	// when data is received from client side..
	socket.on("dataSend", (data) => {
		// send it to all the user connected to the server.
		io.emit("dataReceived", data);
	});
});

app.use("/", express.static(__dirname + "/public"));

server.listen(3434, () => {
	console.log("Server running on http://localhost:3434");
});
