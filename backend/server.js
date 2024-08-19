const app = require("./app");
require("dotenv").config();
const { User } = require("./src/db/creator");
const https = require("https");

console.log("PORT:", process.env.PORT);
const port = process.env.PORT || 3000;
if (process.env.TYPE === "https") {
	https
		.createServer(
			{
				cert: fs.readFileSync(process.env.HTTPS_CERT),
				key: fs.readFileSync(process.env.HTTPS_KEY),
				rejectUnauthorized: false,
			},
			app
		)
		.listen(port, function () {
			console.log("Server https running on port " + port);
		})
		.exception((e) => {
			console.log("Server https not running, throws exception:\n", e);
		});
} else {
	app.listen(port, () => {
		console.log(" Server is running on port:", port);
	});
}
