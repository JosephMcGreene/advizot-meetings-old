require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

console.log(process.env.COACH_KEY);

//Middleware
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

//Routes
app.post("/post", cors(), (req, res) => {
	console.log(req.body);
	console.log(res.body);
});

//Server Start
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
