const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  _id: String,
  name: String,
  poster: String,
  title: Number,
  lastupdated: String,
});

module.exports = mongoose.model("Movie", movieSchema, "movies");
