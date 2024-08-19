const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	if (req.query["info"]) {
		res.send({ result: true, info: "Health status Ok with Info as query:" + req.query["info"] });
	} else {
		res.send({ result: true, info: "Health status Ok" });
	}
});
//this works if is: url/health/value ==> value is passed as info as a parameter
router.get("/:info", (req, res) => {
	res.send({ result: true, info: "Test route is displaying data(as param info):" + req.params["info"] });
});

module.exports = router;
