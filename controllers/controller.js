/** @format */

const users = require("../models/model.js");
const stakingData = require("../models/stakingModel.js");

exports.create = async (req, res) => {
	console.log("Req:", req.body);
	const sData = new users({
		wallet: req.body.wallet || "Untitled Note",
		case: req.body.case,
		amount: req.body.amount,
	});

	sData
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log("Err: ", err);
			res.status(500).send({
				message: err.message || "Some error occurred while creating the Note.",
			});
		});
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	users
		.find()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		});
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
	const { wallet } = req.params;
	users
		.find({ wallet })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		});
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
	const { nftAddress } = req.params;
	users
		.deleteMany({ nftAddress })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		});
};

// exports.createStake = async (req, res) => {
// 	console.log("Req:", req.body);
// 	const sData = new stakingData({
// 		wallet: req.body.wallet || "Untitled Note",
// 		nftAddress: req.body.nftAddress,
// 		url: req.body.url,
// 		name: req.body.name,
// 	});

// 	sData
// 		.save()
// 		.then((data) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			console.log("Err: ", err);
// 			res.status(500).send({
// 				message: err.message || "Some error occurred while creating the Note.",
// 			});
// 		});
// };



exports.createStake = async (req, res) => {
    console.log("Req:", req.body);
    const sData = new stakingData({
        wallet: req.body.wallet || "Untitled Note",
        nftAddress: req.body.nftAddress,
        url: req.body.url,
        name: req.body.name,
    });

    let check = await stakingData.find({
        wallet: req.body.wallet,
        nftAddress: req.body.nftAddress,
    });

    console.log(check);

    if (check.length > 0) {
        res.json({ message: "Already exists" });
    } else {
        sData
            .save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                console.log("Err: ", err);
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Note.",
                });
            });
    }
};

exports.findAllStaking = (req, res) => {
	stakingData
		.find()
		.then((data) => {
			// res.send(data);
			res.json(data.length);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		});
};

exports.findOneStaking = (req, res) => {
	const { wallet } = req.params;
	stakingData
		.find({ wallet })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		});
};

exports.deleteStaking = (req, res) => {
	const { nftAddress } = req.params;
	stakingData
		.deleteMany({ nftAddress })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error occurred while retrieving notes.",
			});
		});
};
