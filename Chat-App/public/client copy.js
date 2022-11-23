let socket = io();

let msgData = document.getElementById("msgData");
let sendData = document.getElementById("sendData");
let displayData = document.getElementById("displayData");

// socket.on("connect", () => {});

sendData.onclick = function () {
	// sending input box data to server,
	socket.emit("dataSend", {
		msg: msgData.value,
	});
	// clear value of the msgData, so that future input doesn't have prev. input
	msgData.value;
};

// When data is received from server, create an list element and append it
socket.on("dataReceived", (data) => {
	let li = document.createElement("li");
	li.innerText = data.msg;
	displayData.append(li);
});
