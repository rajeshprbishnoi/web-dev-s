const express = require("express");
const app = express();
const expressSession = require("express-session");

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(
	expressSession({
		resave: true, // Save the cookie on each client <--> communication
		saveUninitialized: true, // save cookie even if nothing to track
		secret: "this is a random string", // used to encrypt the cookie, it'll be random string consisting of number and letters(characters)
		// by default cookie name will be 'connect.sid'
		// we can change the name of the cookie with :
		name: "mycookie",
	})
	// first in the response header cookie will be send to the client,
	// in the next request from the client the cookie will be sent to the server in the request header
);

/* =====> Stateless
app.get("/", (req, res) => {
	res.render("index", { users: users.findAll() });
});
*/
let count = 0;
app.get("/", (req, res) => {
	console.log(req.session); // req.session exist when we are using expressSession middleware

	if (!req.session.visits) req.session.visits = 1;
	else req.session.visits++;
	count++;
	res.render("index", { count });
});

app.listen(3434, () => {
	console.log("server started on http://localhost:3434");
});
