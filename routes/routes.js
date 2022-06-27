const express = require("express");
const Controller = require("./../controllers/controller");
const router = express.Router();
router.post("/order/feedback",Controller.giveFeedback);
router.get("/order/get/feedback",Controller.getFeedback);
module.exports = router