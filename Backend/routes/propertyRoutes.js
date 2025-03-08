const express = require("express");
const Property = require("../models/Property");

const router = express.Router();

// Get all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Add new property (Admin only)
router.post("/", async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ error: "Failed to add property" });
  }
});

module.exports = router;
