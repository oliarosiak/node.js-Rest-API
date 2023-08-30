const Contact = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({ owner }, "", { skip, limit }).populate(
    "owner",
    "email subscription"
  );

  if (favorite === "true") {
    const favoriteContacts = result.filter(
      (contact) => contact.favorite === true
    );

    res.json(favoriteContacts);
  }

  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
