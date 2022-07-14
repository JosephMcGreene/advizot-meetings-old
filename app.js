// "start": "node src/server2/index.js",
const express = require("express");
const axios = require("axios");
const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.post("/post", (req, res) => {
	console.log(req.body);
	console.log(req.body.name);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is listening at http://localhost:${PORT}`);
});
