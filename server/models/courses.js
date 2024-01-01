import mongoose from 'mongoose';
const courseSchema = mongoose.Schema(
  {
    fullName: String,
    country: String,
    email: String,
    qualification: String,
    phone: String,
    feeback: String,
    profilePicture: String,
    city:""
  },
  { timestamps: true }
);
const courses =
  mongoose.models.Courses || mongoose.model('Courses', courseSchema);
export default courses;
