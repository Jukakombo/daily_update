import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    name: "",
    yesterday_task: "",
    yesterday_date: "",
    today_task: "",
    today_date: "",
    role_block: "",
  },
  { timestamps: true }
);
const Contacts =
  mongoose.models.Contacts || mongoose.model("Contacts", contactSchema);
export default Contacts;
