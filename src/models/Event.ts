import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  date: {
    type: Date,
    required: [true, "Please add a date"],
  },
  time: {
    type: String,
    required: [true, "Please add a time"],
  },
  location: {
    type: String,
    required: [true, "Please add a location"],
  },
  category: {
    enum: ["Concert", "Festival", "Live Show", "DJ Set", "Album Release Party"],
    required: [true, "Please add a category"],
  },

  poster: {
    type: String,
    default: "default.png",
  },
  capacity: {
    type: Number,
    required: [true, "Please add a capacity"],
    default: 250,
  },
});
