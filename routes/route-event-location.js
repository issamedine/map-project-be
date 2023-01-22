const express = require("express");
const router = express.Router();

const locationController = require("../controllers/locationController");

//@route POST /add-location
//@desc  add new location
//@access Public
router.post("/add-location", locationController.addLocation);

//@route GET /get-locations
//@desc  get locations
//@access Public
router.get("/get-locations", locationController.getLocations);

module.exports = router;