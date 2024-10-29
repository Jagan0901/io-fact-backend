import mongoose from "mongoose";

const producerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  companyName: String,
});

export default mongoose.model("Producer", producerSchema);
