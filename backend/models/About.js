const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema(
  {
    title: { type: String, default: "Our Story" },
    tagline: { type: String },
    name: { type: String },
    role: { type: String },
    quote: { type: String },
    description: { type: String, required: true },
    mission: { type: String },
    vision: { type: String },
    image: { type: String, required: true },
    sliderImages: { type: [String], default: [] },
    isVisible: { type: Boolean, default: true },
    createdBy: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
