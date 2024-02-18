/* eslint-disable no-undef */
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  selectedItems: {
    type: [String],
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;
