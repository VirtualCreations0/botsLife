/** @format */

const mongoose = require("mongoose");

const users = mongoose.Schema(
	{
		wallet: String,
		case: String,
		amount: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("users", users);
