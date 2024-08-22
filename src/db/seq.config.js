const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
var db;
var sequelize;
if (process.env.DEPLOYMENT === "production") {
	// db = require("./db.config.heroku"); //only for production, else local config
	sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
	db = require("./db.config");
	sequelize = new Sequelize(db.DATABASE, db.USER, db.PASSWORD, {
		host: db.HOST,
		dialect: db.DIALECT,
		port: db.PORT,
		pool: db.pool,
	});
}
//use db from local or from heroku or the server we want to use

//Check if connection is OK
const testDbConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
testDbConnection();
module.exports = { sequelize, DataTypes, Sequelize };
