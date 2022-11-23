const express = require("express");
const http = require("http");

const app = express();
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

let users = {
	dummy: "dummy_pass",
};

let socketMap = {};

io.on("connection", (socket) => {
	console.log("Data received from : ", socket.id);

	function login(s, u) {
		s.join(u);
		s.emit("logged_in");
		socketMap[s.id] = u;
		console.log(users);
		console.log(socketMap);
	}

	socket.on("login", (data) => {
		if (users[data.username]) {
			if (users[data.username] === data.password) {
				login(socket, data.username);
			} else {
				socket.emit("login_failed");
			}
		} else {
			users[data.username] = data.password;
			login(socket, data.username);
		}
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
