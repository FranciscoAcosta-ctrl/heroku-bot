const express = require("express");
const router = express.Router();
const Product=require("../Models/")

  router.get("/compra", (req, res) => {
    return res.render("products");
  });

  module.exports = router;