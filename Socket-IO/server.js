// To communicate from A to B, http can take different path each time a new request is made but in case of web socket first the pipeline is established between A & B which will be live till they are exchanging the data.
// Web sockets runs on http only.

const express = require("express");
const http = require("http");

const app = express();
const socketio = require("socket.io");

// http server out of express app
const server = http.createServer(app);
// a socket.io.js file will added to our app, on http://localhost:3344/socket.io/socket.io.js
// file socket.io.js will be availabe to front end of out app (we need socket.io client to connect to the socket.io server)
const io = socketio(server);

// printing Socket id of the connection
io.on("connection", (socket) => {
	console.log("Connected with socket id : ", socket.id);

	socket.on("boom", () => {
		console.log("Boom received from : ", socket.id);
	});

	setInterval(() => {
		socket.emit("wizz");
	}, 2000);
});

app.use("/", express.static(__dirname + "/public"));

server.listen(3344, () => {
	console.log("server started on http://localhost:3344");
});
