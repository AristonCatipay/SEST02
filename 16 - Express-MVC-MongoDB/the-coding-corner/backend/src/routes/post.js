  const express = require("express");
  const router = express.Router();
  const {
    createPost,
    getAllPosts,
    getPost,
    deletePost,
    updatePost
  } = require("../controllers/post");

  // POST: Create a new Post
  // POST: http://localhost:3000/posts/
  router.post("/", createPost);
  // GET: http://localhost:3000/posts/
  router.get("/", getAllPosts);
  // GET: http://localhost:3000/posts/:id
  router.get("/:id", getPost);
  // DELETE: http://localhost:3000/posts/:id
  router.delete("/:id", deletePost);
  // PUT: http://localhost:3000/posts/:id
  router.put("/:id", updatePost);

  module.exports = router;
