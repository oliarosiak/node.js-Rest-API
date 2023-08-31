const express = require("express");

const {
  getAllContacts,
  getContactById,
  addNewContact,
  updateContactById,
  updateStatusContact,
  deleteContactById,
} = require("../../controllers/contacts/");

const { validateBody, isValidId, isValidToken } = require("../../middlewares");
const {
  contactJoiSchema,
  favoriteJoiSchema,
} = require("../../schemas/contacts");

const router = express.Router();

router.get("/", isValidToken, getAllContacts);

router.get("/:contactId", isValidToken, isValidId, getContactById);

router.post("/", isValidToken, validateBody(contactJoiSchema), addNewContact);

router.delete("/:contactId", isValidToken, isValidId, deleteContactById);

router.put(
  "/:contactId",
  isValidToken,
  isValidId,
  validateBody(contactJoiSchema),
  updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidToken,
  isValidId,
  validateBody(favoriteJoiSchema),
  updateStatusContact
);

module.exports = router;
