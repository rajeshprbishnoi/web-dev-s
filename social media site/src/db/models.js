const Sequelize = require("sequelize");

const db = new Sequelize({
	dialect: "mysql",
	database: "samplesocialmediadb",
	username: "samplesocialuser",
	password: "samplesocialpass",
});

const COL_ID_DEF = {
	type: Sequelize.DataTypes.INTEGER,
	autoIncrement: true,
	allowNull: false,
	primaryKey: true,
};

const COL_TITLE_DEF = {
	type: Sequelize.DataTypes.STRING(30),
	allowNull: false,
};

const Users = db.define("user", {
	id: COL_ID_DEF,
	username: {
		type: Sequelize.DataTypes.STRING(30),
		unique: true,
		allowNull: false,
	},
});

const Posts = db.define("post", {
	id: COL_ID_DEF,
	title: COL_TITLE_DEF,
	body: {
		type: Sequelize.DataTypes.TEXT, // normal text size : 64KB
		allowNull: false,
	},
});

const Comments = db.define("comment", {
	id: COL_ID_DEF,
	body: {
		type: Sequelize.DataTypes.TEXT("tiny"), // tiny text size : 255B
		allowNull: false,
	},
});

Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Comments);
Comments.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

module.exports = {
	db,
	Users,
	Comments,
	Posts,
};
