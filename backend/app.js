require("dotenv").config();
const { User, ToDo, sequelize } = require("./src/db/creator");
const ownMiddleware = require("./src/routes/middleware");
const healthRouter = require("./src/routes/health");
//Requirements
const express = require("express");
const cors = require("cors");
const app = express();

//
app.use(cors()); //{ origin: allowList }
app.use(express.json());
app.use(ownMiddleware);
app.use("/health", healthRouter);
//ROUTES here

module.exports = app;
