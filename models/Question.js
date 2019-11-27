const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  name: String,
  questions: [
    {
      text: String,
      answer: String
    }
  ],
  playedBy: [
    {
      name: String,
      rightAmount: Number,
      date: Date.now
    }
  ],
  createdBy: String
});

module.exports = mongoose.model("Quiz", QuizSchema);
