const { Schema, model, Types } = require("mongoose");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    reuired: true,
    maxLength: 280,
  },
  userName: {
    type: String,
    reuired: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    defualt: Date.now,
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
});
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});



const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
