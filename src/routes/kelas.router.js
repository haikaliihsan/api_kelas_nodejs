const express = require("express");

const router = express.Router();

const { index } = require("../controllers/kelas.controllers");

router.get("/",index);

module.exports = router;
