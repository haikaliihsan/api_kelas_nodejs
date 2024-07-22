const express = require("express");

const router = express.Router();

const {validateToken} = require("../middlewares/auth");
const { index } = require ("../controllers/sub_bab.controller");

router.get("/", validateToken, index);

module.exports = router;