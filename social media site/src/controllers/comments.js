const { Users, Posts, Comments } = require("../db/models");

async function commentOnPost(userId, postId, body) {
	const comment = await Comments.create({
		userId,
		postId,
		body,
	});
	return comment;
}

async function findAllComments(query) {
	const comments = await Comments.findAll({
		include: [Users],
	});

	return comments;
}

module.exports = {
	commentOnPost,
	findAllComments,
};

// Test code
/*
async function task() {
	console.log(await commentOnPost(1, 3, "This is a comment on post 3 by 1"));
	console.log("====================");

	console.log(await commentOnPost(4, 2, "This is a comment on post 2 by 4"));
	console.log("====================");
}

task();
*/
