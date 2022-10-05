const { Posts, Users } = require("../db/models");

async function createNewPost(userId, title, body) {
	const post = await Posts.create({
		userId,
		title,
		body,
	});
	return post;
}

/** // We could either pass username or title in query object & filter the post based on the params
 * findAllPosts({username: ''})
 * findAllPosts({title: ''})
 */

async function findAllPosts(query) {
	// TODO: Handle query params
	const posts = await Posts.findAll({
		include: [Users],
	});

	return posts;
}

module.exports = {
	createNewPost,
	findAllPosts,
};

/* Test Code */
/*
async function task() {
	// console.log(
	// 	await createNewPost(
	// 		1,
	// 		"This is a sample post",
	// 		"Body of the post goes here"
	// 	)
	// ),
	// 	console.log(
	// 		await createNewPost(
	// 			2,
	// 			"Another sample post",
	// 			"Some body example here as well"
	// 		)
	// 	);
	const posts = await findAllPosts();
	for (let p of posts) {
		console.log(
			`${p.title}\nauthor: ${p.user.username}\n${p.body}\n==========\n`
		);
	}
}
task();
*/
