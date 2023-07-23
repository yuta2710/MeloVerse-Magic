import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please add a valid email",
    ],
		unique: true,
		required: [true, "Please add an email"]
  },
	role: {
		type: String,
		enum: ["guest", "user", "organizer", "admin"],
		default: "guest"
	},
	password: {
		type: String,
		minlength: 6,
		select: false,
		required: [true, "Please add a password"]
	},
	resetPasswordToken: String,
	resetPasswordExpired: Date,
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model("User", UserSchema);