import mongoose from 'mongoose';
const CommentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    comment: { type: String, required: true },
    website: { type: String, required: true },
  },
  { timestamps: true }
);
const Comments =
  mongoose.models.Comments || mongoose.model('Comments', CommentSchema);
export default Comments;
