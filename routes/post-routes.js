const express = require("express");
const router = express.Router();
const {
  getPost,
  deletePost,
  getPosts,
  addPost,
  getAddPost,
  getEditPost,
  editPost,
} = require("../controllers/post-controller");

router.get("/post/:id", getPost);

router.delete("/post/:id", deletePost);

router.get("/edit/:id", getEditPost);

router.put("/edit/:id", editPost);

router.get("/posts", getPosts);

router.get("/add-post", getAddPost);

router.post("/add-post", addPost);

module.exports = router;
