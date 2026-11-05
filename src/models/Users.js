const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

const UserInstance = new User({
  name: "Cheick",
  email: "cheick@example.com",
  password: "password123",
  nationality: "Ivoirienne"
});

module.exports = User;