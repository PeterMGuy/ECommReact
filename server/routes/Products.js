const express = require("express");
const router = express.Router();
const { Products } = require("../models");

router.get("/", async (req, res) => {
  const listOfProducts = await Products.findAll();
  res.json(listOfProducts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Products.create(post);
  res.json(post);
});

module.exports = router;