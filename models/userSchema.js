const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const validator = require("validator");

// Create a Mongoose schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  signedInAt: {
    type: Date,
    default: Date.now,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

// userSchema.pre("save", async function (next) {
//   console.log("Pre-save hook executed!");
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//     this.confirmPassword = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

// Create a model from the schema
const User = mongoose.model("users", userSchema);

// Export the User model
module.exports = User;
