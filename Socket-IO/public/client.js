// io is an reference on the server to which every socket is connected;
// on client io is a function, using which we can make connection to the serer
// for every client there is only one socket
// on server there are multiple sockets which are connected to different clients but they are in clouser of a particular anonymous function
/*
id's are base 64; means they'll have letters ("A-Z", "a-z"), numbers ("0-9") , underscore (_) & hyphen (-);
Standard base 64 contains slash (/) and equal (=) instead of underscore and hyphen
*/
// If a page is refreshed or connection has been reset, after reload new id will be there, prev. id (before reset) whould have been disrupt, similarly on the server side if the server has been restarted then all the prev. connection will have new IDs.

let socket = io();

// On server side, this is "connection" instead of "connect"; there it is "io.on" instead of "socket.on"
socket.on("connect", () => {
	document.getElementById("socketID").innerText = socket.id;
});

let boomBtn = document.getElementById("boom");

boomBtn.onclick = function () {
	socket.emit("boom");
};

socket.on("wizz", () => {
	let div = document.createElement("div");
	div.innerText = "wizz";
	document.body.appendChild(div);
});
