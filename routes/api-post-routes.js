const express = require("express");
const router = express.Router();
const {
  getPost,
  deletePost,
  getPosts,
  addPost,
  editPost,
} = require("../controllers/api-post-controller");

{
  /* GET ALL POSTS */
}
router.get("/api/posts", getPosts);
{
  /* ADD NEW POST */
}
router.post("/api/add-post", addPost);
{
  /* GET POST BY ID */
}
router.get("/api/post/:id", getPost);
{
  /* DELETE POST BY ID */
}
router.delete("/api/post/:id", deletePost);
{
  /* UPDATE POST BY ID */
}
router.get("/api/post/:id", editPost);

module.exports = router;
