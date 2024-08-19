module.exports = {
	DATABASE: "mgprecintods",
	HOST: "192.168.10.105",
	USER: "postgres",
	PASSWORD: "",
	PORT: "5432",
	DIALECT: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
