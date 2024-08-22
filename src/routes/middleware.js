const express = require("express");
//if we need some funcionality for validating something (token?) this is the place to put it
//access the request, validating if known or not, or else.
function ownMiddleware(request, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
}
module.exports = ownMiddleware;
