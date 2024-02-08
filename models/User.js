const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  age: Number,
  userNum: String,
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});
module.exports = mongoose.model("User", UserSchema);
