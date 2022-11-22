let socket = io();

let msgData = document.getElementById("msgData");
let sendData = document.getElementById("sendData");
let displayData = document.getElementById("displayData");

// socket.on("connect", () => {});

sendData.onclick = function () {
	socket.emit("dataSend", {
		msg: msgData.value,
	});
	msgData.value;
};

socket.on("dataReceived", (data) => {
	let li = document.createElement("li");
	li.innerText = data.msg;
	displayData.append(li);
});
