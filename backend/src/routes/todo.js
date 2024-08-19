const express = require("express");
const router = express.Router();
const { add, list, edit, remove } = require("../model/todo_m");

router.post("/", async (req, res) => {
	let resp = await add(req.body);
	res.send(resp);
});
router.put("/", async (req, res) => {
	let resp = await edit(req.body);
	res.send(resp);
});
router.delete("/", async (req, res) => {
	let resp = await remove(req.body);
	res.send(resp);
});
router.get("/", async (req, res) => {
	let resp = {};
	resp = await list({
		query: req?.query?.task ? req?.query?.task : false,
		qty: req?.query?.qty ? req?.query?.qty : false,
	});
	res.send(resp);
});
module.exports = router;
