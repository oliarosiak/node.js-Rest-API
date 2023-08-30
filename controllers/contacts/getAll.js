const Contact = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner }).populate(
    "owner",
    "email subscription"
  );
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
