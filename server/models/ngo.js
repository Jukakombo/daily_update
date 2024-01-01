import mongoose from "mongoose";
const ngodatachema = mongoose.Schema(
  {
    organizationName: String,
    country: String,
    certificate: String,
    email: String,
    phone: String,
    feeback: String,
  },
  { timestamps: true }
);
const ngodatas =
  mongoose.models.Ngodatas || mongoose.model("Ngodatas", ngodatachema);
export default ngodatas;
