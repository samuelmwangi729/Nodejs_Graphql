
const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentProfile",
      required: true,
    },

    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },

    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
    },

    marksObtained: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    maximumMarks: {
      type: Number,
      default: 100,
      immutable: true,
    },

    remarks: {
      type: String,
      trim: true,
    },

    enteredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

resultSchema.index(
  { student: 1, exam: 1, subject: 1 },
  { unique: true }
);

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
