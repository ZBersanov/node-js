const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const createPath = require("./helpers/createPath");
const methodOverride = require("method-override");
const postRoutes = require("./routes/post-routes");
const contactRoutes = require("./routes/contact-routes");
const apiPostRoutes = require("./routes/api-post-routes");

const db =
  "mongodb+srv://zaur:zaur6666@cluster0.3t2dok3.mongodb.net/nodeblog?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db)
  .then((res) => console.log("Connected to db"))
  .catch((err) => console.log(err));

const app = express();

app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, (err, data) => {
  console.log(`Listening ${PORT}`);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.use(methodOverride("_method"));

app.use(postRoutes);
app.use(contactRoutes);
app.use(apiPostRoutes);

{
  /* -------------------------PAGES-------------------------------------------------- */
}

app.get("/", (req, res) => {
  const title = "Home Page";
  res.render(createPath("home"), { title });
});

app.get("/about-us", (req, res) => {
  res.redirect("/contacts");
});

app.use((req, res) => {
  const title = "Error Page";
  res.status(404).render(createPath("error"), { title });
});
