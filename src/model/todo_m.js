const { ToDo, sequelize } = require("../db/creator");
const { where, Op } = require("sequelize");

//cleans if we have more than 10 elements.
//it might show up to 11 elements but not more than that.
function cleanList() {
	try {
		ToDo.findAll({ offset: 10, limit: 5000, order: [["id", "DESC"]] }).then((rs) => {
			rs.forEach((element) => {
				element.destroy();
			});
		});
	} catch (e) {}
}
async function list({ query = false, qty = false }) {
	try {
		let res;
		cleanList();
		if (query) {
			// console.log("Query:", query);
			let whereClauses = [];
			const whereClause = sequelize.where(sequelize.fn("LOWER", sequelize.col("task")), "LIKE", `%${query}%`);
			whereClauses.push(whereClause);
			if (qty) {
				res = await ToDo.findAll({ where: { [Op.or]: whereClauses }, limit: qty, order: [["id", "DESC"]] });
			} else {
				res = await ToDo.findAll({ where: { [Op.or]: whereClauses }, order: [["id", "DESC"]] });
			}
		} else {
			if (qty) {
				res = await ToDo.findAll({ limit: qty, order: [["id", "DESC"]] });
			} else {
				res = await ToDo.findAll({ order: [["id", "DESC"]] });
			}
		}

		return { status: true, data: res };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Error listing ToDo's" };
	}
}

async function add(todo) {
	try {
		if (todo?.data?.task) {
			todo = todo.data;
		}
		let res = await ToDo.create(todo);
		return { status: true, data: res, msg: "ToDo added", id: res.id };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Error creating ToDo" };
	}
}

async function edit(todo) {
	try {
		if (todo?.data?.task) {
			todo = todo.data;
		}
		let res = await ToDo.upsert(todo); //Add or update, based on id
		return { status: true, data: res, msg: "Update ok" };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Error updating ToDo" };
	}
}

async function remove(todo) {
	try {
		if (todo?.data?.id) {
			todo = todo.data;
		}
		let res = await ToDo.destroy({ where: { id: todo.id } });
		return { status: true, data: res, id: todo.id, msg: "ToDo " + todo.id + " deleted correctly" };
	} catch (e) {
		return { status: false, error: e.toString(), msg: "Error deleting todo" };
	}
}

module.exports = { list, add, edit, remove };
