import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  producer: { type: mongoose.Schema.Types.ObjectId, ref: "Producer" },
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
});

export default mongoose.model("Movie", movieSchema);
