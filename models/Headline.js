// Require mongoose
var mongoose = require("mongoose");

// Creating schema with mongoose
var Schema = mongoose.Schema;

// Create the headline Schema schema class
var headlineModel = new Schema({
  // headline is a required string, must be unique
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // summary, a string, required
  summary: {
    type: String,
    required: true
  },
  // url, a string, required
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineModel
var Headline = mongoose.model("Headline", headlineModel);

// Export the Headline model
module.exports = Headline;
