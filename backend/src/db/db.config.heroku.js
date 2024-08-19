require("dotenv").config();
module.exports = {
	DATABASE: process.env.DB.DATABASE,
	HOST: process.env.DB.HOST,
	USER: process.env.DB.USER,
	PASSWORD: process.env.DB.PASSWORD,
	PORT: process.env.DB.PORT,
	DIALECT: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
