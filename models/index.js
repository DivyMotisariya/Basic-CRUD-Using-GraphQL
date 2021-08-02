const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/temp_db", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const { Book } = require("./books.model")(mongoose);
const { Author } = require("./authors.model")(mongoose);

module.exports = { Book, Author };