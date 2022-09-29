import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  token: { token: String },
  specialities: {
    type: [String],
  },
  technologies: { type: [String] },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

export default mongoose.model("User", UserSchema);