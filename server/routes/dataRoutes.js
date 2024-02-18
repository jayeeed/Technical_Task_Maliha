/* eslint-disable no-undef */
const express = require("express");
const DataController = require("../controllers/dataController");

const router = express.Router();

router.post("/saveData", DataController.DataController);

module.exports = router;
