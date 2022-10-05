const models = require("../db/models");
const Users = models.Users;
const { getRandomUsername } = require("../utils/username");

async function createAnonUser() {
	const user = await Users.create({
		username: getRandomUsername(),
	});

	return user;
}
// finding user by id in the db in Users table
async function getUserById(id) {
	return await Users.findOne({
		where: { id },
	});
}

async function getUserByUsername(username) {
	return await Users.findOne({
		where: { username },
	});
}

module.exports = {
	createAnonUser,
	getUserById,
	getUserByUsername,
};

// Test code
/*
async function tasks() {
	console.log(await createAnonUser());
	console.log(await createAnonUser());
	console.log(await createAnonUser());
}

tasks();
*/
