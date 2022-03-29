/** @format */

module.exports = (app) => {
	const controller = require("../controllers/controller.js");

	app.post("/post", controller.create);
	app.get("/get", controller.findAll);
	app.get("/getAll", controller.findAllStaking);

	app.post("/stake", controller.createStake);
	app.get("/stakeData/:wallet", controller.findOneStaking);
	app.delete("/unstake/:nftAddress", controller.deleteStaking);
};
