const express = require("express");
const router = express.Router();

//get request by router
router.get("/", (req, res) => {
  res.send("Get from router");
});

//post request by router
router.post("/", (req, res) => {
  res.send("Post request from router");
});

//For use router in index.js must be export
module.exports = router;
