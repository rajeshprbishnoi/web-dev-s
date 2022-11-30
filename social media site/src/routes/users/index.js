const { Router } = require("express");

const {
	createAnonUser,
	getUserById,
	getUserByUsername,
} = require("../../controllers/users");

const route = Router();

route.get("/:id", async (req, res) => {
	let user;
	console.log(req.params.id);

	if (isNaN(parseInt(req.params.id))) {
		// when param is username :
		user = await getUserByUsername(req.params.id);
	} else {
		// when param is userId:
		user = await getUserById(req.params.id);
	}

	console.log(user);
	// If we found the user then send the user, else status code 404 & send error message
	if (user) {
		res.status(200).send(user);
	} else {
		res.status(404).send({
			error: "No such user id or name found",
		});
	}
});

route.post("/", async (req, res) => {
	const user = await createAnonUser();
	res.status(201).send(user);
});

module.exports = {
	usersRoute: route,
};
