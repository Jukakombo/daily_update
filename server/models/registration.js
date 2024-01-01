import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    contact: String,
    gradeObtain: String,
    sex: String,
    courseCompleted: String,
    startedYear: String,
    completeYear: String,
    profilePhoto: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;
