const express = require("express");
const router = express.Router();

  router.get("/compra", (req, res) => {
    return res.render("products");
  });

  module.exports = router;