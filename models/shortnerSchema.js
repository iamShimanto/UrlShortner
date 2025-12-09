const mongoose = require("mongoose");

const shortnerSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  visitHistory: [
    {
      visitTime: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Shortner = mongoose.model("shorturl", shortnerSchema);

module.exports = Shortner;
