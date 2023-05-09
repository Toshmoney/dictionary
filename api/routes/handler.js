const express = require("express");
const router = express.Router()
const { getAllwords, getSinglewords } = require("../controller/controller");


router.route("/api/v1").get(getAllwords);
router.route("/api/v1/parenthesis").get(getSinglewords)


module.exports = router;