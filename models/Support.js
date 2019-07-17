const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalcode: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Support = mongoose.model("support", SupportSchema);
