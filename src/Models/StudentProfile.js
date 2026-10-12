
const mongoose = require("mongoose");

const studentProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    admissionNumber: {
      type: String,
      required: true,
      trim: true,
    },

    institution: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institution",
      required: true,
    },

    classroom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
      default: null,
    },

    admissionDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["active", "graduated", "transferred", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

studentProfileSchema.index(
  { institution: 1, admissionNumber: 1 },
  { unique: true }
);

const StudentProfile = mongoose.model(
  "StudentProfile",
  studentProfileSchema
);

module.exports = StudentProfile;
