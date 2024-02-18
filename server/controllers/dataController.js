/* eslint-disable no-undef */
const DataModel = require("../models/dataModel");

const DataController = async (req, res) => {
  try {
    const Data = await DataModel.create(req.body);
    return res.status(201).json({ message: "Data saved successfully", Data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.DataController = DataController;
