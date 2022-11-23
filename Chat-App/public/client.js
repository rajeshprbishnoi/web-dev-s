let socket = io();

let loginBox = document.getElementById("loginBox");
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnStart = document.getElementById("btnStart");
let chatBox = document.getElementById("chatBox");
let sendTo = document.getElementById("sendTo");
let msgData = document.getElementById("msgData");
let sendMsg = document.getElementById("sendMsg");
let displayMsg = document.getElementById("displayMsg");

loginBox.style.display = "block";
chatBox.style.display = "none";

btnStart.onclick = function () {
	socket.emit("login", {
		username: username.value,
		password: password.value,
	});
};

socket.on("logged_in", () => {
	loginBox.style.display = "none";
	chatBox.style.display = "block";
});

socket.on("login_failed", () => {
	window.alert("Username or Password wrong");
});

sendMsg.onclick = function () {
	socket.emit("messageSend", {
		sendTo: sendTo.value,
		messageData: msgData.value,
	});
};

socket.on("messageReceived", (data) => {
	let newMessage = document.createElement("li");
	let outputString = `[${data.from}] : ` + data.messageData;
	newMessage.innerText = outputString;
	displayMsg.appendChild(newMessage);
});
