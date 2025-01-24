const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  likes: { type: Number },
  comments: [{ body: String }],
});
// _id : Unique identifier for each of the documents.
// __v : Tracks how many times you updated that document.

const db = mongoose.connection.useDb("posts");
const Post = db.model("postInfo", postSchema);

module.exports = Post;
