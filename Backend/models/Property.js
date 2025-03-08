const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  location: String,
  latitude: Number,
  longitude: Number,
  price: String,
  image: String,
  images: [String],
  details: String,
  type: String,
  bedrooms: Number,
  bathrooms: Number,
  area: String,
  builtYear: Number,
  amenities: [String],
});

module.exports = mongoose.model("Property", PropertySchema);
