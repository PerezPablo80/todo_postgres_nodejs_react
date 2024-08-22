require("dotenv").config();
const { DATABASE } = require("./db.config");
const { sequelize, DataTypes } = require("./seq.config");
//https://sequelize.org/docs/v6/core-concepts/assocs/
//https://sequelize.org/docs/v6/core-concepts/model-basics/
const ToDo = sequelize.define("todo", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true,
	},
	task: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
});
const User = sequelize.define("user", {
	// Model attributes are defined here
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	userName: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	securityLevel: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 1,
	},
	uuid: {
		type: DataTypes.UUID,
		allowNull: false,
		defaultValue: DataTypes.UUIDV4,
	},
	notify: {
		type: DataTypes.BOOLEAN,
		allowNull: true,
		defaultValue: false,
	},
});

(async () => {
	//si no tengo ninguno de los tres, no hago NADA de sincronización
	console.log("type:", process.env.DEPLOYMENT);
	if (process.env.DEPLOYMENT == "production") {
		await sequelize.sync();
	} else if (process.env.DEPLOYMENT == "development" || process.env.DEPLOYMENT == "develop") {
		await sequelize.sync({ alter: true });
	} else {
		if (process.env.DEPLOYMENT == "force") {
			await sequelize.sync({ force: true }); //si cae en otro no modifica la BD.
		} else {
			await sequelize.sync();
		}
	}
	// Code here
})();

module.exports = { User, ToDo, sequelize };
