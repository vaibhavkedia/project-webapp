const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  organization: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Organizations",
  },
  teams: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Teams",
    },
  ],
});
module.exports = mongoose.model("Users", userSchema);
