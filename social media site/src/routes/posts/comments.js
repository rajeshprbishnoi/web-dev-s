const Router = require("express");

const route = Router();

const {
	commentOnPost,
	findAllComments,
} = require("../../controllers/comments");

route.get("/", async (req, res) => {
	const comments = await findAllComments();
	res.status(200).send(comments);
});

route.post("/", async (req, res) => {
	const { userId, postId, body } = req.body;
	console.log(req.body);
	console.log(userId);
	console.log(postId);
	console.log(body);
	if (!userId || !postId || !body) {
		return res.status(400).send({
			Error: "Require userId, postId and body to comment",
		});
	}

	const comment = await commentOnPost(userId, postId, body);
	res.status(201).send(comment);
});

module.exports = {
	commentsRoute: route,
};
