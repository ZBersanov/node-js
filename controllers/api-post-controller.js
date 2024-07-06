const Post = require("../models/post");

const handleError = (res, err) => {
  res.status(500).send(err);
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => handleError(res, err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((err) => handleError(res, err));
};

const getPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => handleError(res, err));
};

const editPost = (req, res) => {
  const { title, text, author } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, text, author })
    .then((post) => res.status(200).json(post))
    .catch((err) => handleError(res, err));
};

const addPost = (req, res) => {
  const { title, text, author } = req.body;
  const post = new Post({ title, text, author });
  post
    .save()
    .then((post) => res.status(200).json(post))
    .catch((err) => handleError(res, err));
};

module.exports = {
  getPost,
  deletePost,
  getPosts,
  addPost,
  editPost,
};
