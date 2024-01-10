import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    name: String,
    yesterday_task: String,
    yesterday_date: String,
    today_task: String,
    today_date: String,
    role_block: String,
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
export default Contacts;
