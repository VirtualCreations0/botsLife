/** @format */

const mongoose = require("mongoose");

const stakingData = mongoose.Schema(
	{
		wallet: String,
		nftAddress: String,
		url: String,
		name: String,
		

	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("stakingData", stakingData);
