const Post = require("../models/post");
const createPath = require("../helpers/createPath");

const handleError = (res, err) => {
  console.log(err);
  res.render(createPath("error"), { title: "error" });
};

const getPost = (req, res) => {
  const title = "Post Page";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("post"), { post, title }))
    .catch((err) => handleError(res, err));
};

const deletePost = (req, res) => {
  const title = "Post Page";
  Post.findByIdAndDelete(req.params.id)
    .then(res.sendStatus(200))
    .catch((err) => handleError(res, err));
};

const getPosts = (req, res) => {
  const title = "Posts";
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath("posts"), { title, posts }))
    .catch((err) => handleError(res, err));
};

const getAddPost = (req, res) => {
  const title = "Add Post";
  res.render(createPath("add-post"), { title });
};

const getEditPost = (req, res) => {
  const title = "Edit Post";
  Post.findById(req.params.id)
    .then((post) => res.render(createPath("edit-post"), { post, title }))
    .catch((err) => handleError(res, err));
};

const editPost = (req, res) => {
  const { title, text, author } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, text, author })
    .then(() => res.redirect(`/post/${id}`))
    .catch((err) => handleError(res, err));
};

const addPost = (req, res) => {
  const { title, text, author } = req.body;
  const post = new Post({ title, text, author });
  post
    .save()
    .then(() => res.redirect("/posts"))
    .catch((err) => handleError(res, err));
};

module.exports = {
  getPost,
  deletePost,
  getPosts,
  addPost,
  getAddPost,
  getEditPost,
  editPost,
};
