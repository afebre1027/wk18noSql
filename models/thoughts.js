const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoguthText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    defualt: Date.now,
  },
});

const Thought = ("Thought", ThoughtSchema);

module.exports = Thought;
