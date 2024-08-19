const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	res.send({ result: true, info: "Health status Ok" });
});

router.get("/:info", (req, res) => {
	res.send({ result: true, info: "Test route is displaying data(as query info):" + req.params["info"] });
});
module.exports = router;
