const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema(
  {
    filmName: {
      type: String,
      required: true,
      unique: true,
    },
    poster: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: false,
    },
    video: {
      type: [String],
      required: false,
    },
    type: {
      type: String,
      enum: ["series", "movie"],
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    yearPublish: {
      type: Number,
      required: true,
    },
    episode: [{
      numEpisode: {
        type: Number,
        required: false,
      },
      title: {
        type: String,
        required: false,
      },
      video: {
        type: [String],
        required: false,
      },
    }],
    age: {
      type: Number,
      required: false,
    },
    comment: {
      userId: {
        type: String,
        ref: "users",
        required: false,
      },
      content: {
        type: String,
        required: false,
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    tags: {
      type: [String],
      required: false,
    },
  },
  { timeStamp: true }
);

const film = mongoose.model("film", filmSchema);

module.exports = film;
