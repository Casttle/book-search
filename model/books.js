const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  link: String,
  image: String
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
