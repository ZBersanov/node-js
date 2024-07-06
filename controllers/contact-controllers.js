const Contacts = require("../models/contacts");
const createPath = require("../helpers/createPath");

const getContacts = (req, res) => {
  const title = "Contacts Page";
  Contacts.find()
    .then((contacts) => {
      console.log(contacts);
      res.render(createPath("contacts"), { contacts, title });
    })
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"), { title: "error" });
    });
};

module.exports = {
  getContacts,
};
