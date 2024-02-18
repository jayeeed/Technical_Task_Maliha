/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to this route!");
});

module.exports = router;
