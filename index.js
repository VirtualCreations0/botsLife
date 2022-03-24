/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./database.config.js");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// const corsOptions = {
// 	origin: function (origin, callback) {
// 		if (!origin !== -1) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error("Not allowed by CORS"));
// 		}
// 	},
// 	credentials: true,
// };
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
require("./routes/routes.js")(app);

mongoose
	.connect(dbConfig.url, {
		useNewUrlParser: true,
	})
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((err) => {
		console.log("Could not connect to the database. Exiting now...", err);
		process.exit();
	});

	app.use(express.static(path.join(__dirname, "/build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "/build", "index.html"));
	  });

app.listen(3000, () => {
	console.log("Server is listening on port 3000!");
});
