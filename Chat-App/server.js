const express = require("express");
const http = require("http");

const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
	console.log("Data received from : ", socket.id);

	socket.on("dataSend", (data) => {
		io.emit("dataReceived", data);
	});
});

app.use("/", express.static(__dirname + "/public"));

server.listen(3434, () => {
	console.log("Server running on http://localhost:3434");
});
