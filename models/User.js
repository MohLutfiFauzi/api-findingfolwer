const mongoose = require("mongoose");
const imageDefaultUser = "https://ouch-cdn2.icons8.com/x3LAq3MdX4yyQkr3Gfk7mstl37vVsec1nr2b3raqQYQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjg1/LzM5NGUyZGQ1LTEy/NjUtNDQyMy04Njc2/LTYyNzMxYzQwYzRj/MC5zdmc.png";

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, default: "male" },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: imageDefaultUser },
    province: { type: Number, default: null },
    city: { type: Number, default: null },
    address: { type: Object, default: "" },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
