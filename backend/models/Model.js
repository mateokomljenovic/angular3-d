const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Model = new Schema(
  {
    url: {
      type: String,
    },
    text: {
      type: String,
    },
    description: {
      type: String,
    },
    color: {
      type: String,
    },
    scale: {
      type: Number,
    },
  },
  {
    collection: 'models'
  })

module.exports = mongoose.model('Model', Model)
