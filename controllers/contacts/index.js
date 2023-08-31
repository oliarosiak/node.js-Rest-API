const { getAllContacts } = require("./getAll");
const { getContactById } = require("./getById");
const { addNewContact } = require("./addNew");
const { updateContactById } = require("./updateById");
const { updateStatusContact } = require("./updateStatus");
const { deleteContactById } = require("./deleteById");

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  updateContactById,
  updateStatusContact,
  deleteContactById,
};
