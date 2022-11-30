const express = require("express");

const { db } = require("./db/models"); // destructuring syntax
const { usersRoute } = require("./routes/users/index");
const { postsRoute } = require("./routes/posts/index");
const { commentsRoute } = require("./routes/posts/comments");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/comments", commentsRoute);
app.use("/", express.static(__dirname + "/public"));

db.sync()
	.then(() => {
		app.listen(8383, () => {
			console.log("Server started on http://localhost:8383");
		});
	})
	.catch((err) => {
		console.log(new Error("Could not start database"));
		console.log(err);
	});
