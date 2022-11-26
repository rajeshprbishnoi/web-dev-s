const express = require("express");
const session = require("express-session");

const { db, Users } = require("./db");
const app = express();

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	session({
		resave: true,
		saveUninitialized: true,
		secret: "this23dvf4232sd232df12",
	})
);

app.get("/signup", (req, res) => {
	res.render("signup");
});
app.post("/signup", async (req, res) => {
	const user = await Users.create({
		username: req.body.username,
		password: req.body.password, // NOTE : in production we save hash of password
		email: req.body.email,
	});

	res.status(201).send(`User ${user.id} created`);
});

app.get("/login", (req, res) => {
	res.render("login");
});
app.post("/login", async (req, res) => {
	const user = await Users.findOne({
		where: {
			username: req.body.username,
		},
	});

	// if user was not in the db
	if (!user) {
		return res
			.status(404) // server can't find the requested resource
			.render("login", { error: "No such username found" });
	}
	// user is found but the password is wrong
	if (user.password != req.body.password) {
		return res
			.status(401) // unauthorized user
			.render("login", {
				error: `Password ${req.body.password} is incorrect :)`,
			});
	}
	// all ok then render the profile page :
	res.render("/profile");
});

db.sync()
	.then(() => {
		app.listen(4545, () => {
			console.log("server started on http://localhost:4545");
		});
	})
	.catch(console.error);
