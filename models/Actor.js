import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  birthdate: Date,
});

export default mongoose.model("Actor", actorSchema);
