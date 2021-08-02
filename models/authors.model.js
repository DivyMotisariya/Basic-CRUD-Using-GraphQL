const { Schema } = require("mongoose");
// const { Book } = require(".");

const authorSchema = new Schema({
	name: String,
	age: Number,
	// books: [String],
});

module.exports = (mongoose) => ({
	Author: mongoose.model("Author", authorSchema),
});