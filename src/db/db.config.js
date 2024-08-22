module.exports = {
	DATABASE: "todo_test",
	HOST: "192.168.10.105",
	USER: "todo_test",
	PASSWORD: "T0do_3401",
	PORT: "5432",
	DIALECT: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};
