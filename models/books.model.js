const { Schema } = require("mongoose");

const bookSchema = new Schema({
	name: String,
	authorId: String,
	genre: String,
});

module.exports = (mongoose) => ({
  Book: mongoose.model("Book", bookSchema),
});