import mongoose from 'mongoose';
const newsSchema = mongoose.Schema(
  {
    bio: String,
    author: String,
    title1: String,
    paragraph1: String,
    paragraph2: String,
    paragraph3: String,
    category: String,
    image: String,
    authorImage: String,
  },
  { timestamps: true }
);
const News = mongoose.models.News || mongoose.model('News', newsSchema);
export default News;
