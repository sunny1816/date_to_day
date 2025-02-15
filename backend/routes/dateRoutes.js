const express = require("express");
const { getDayOfWeek } = require("../controllers/dateController");

const router = express.Router();

router.post("/get-day", getDayOfWeek);

module.exports = router;
