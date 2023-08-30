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
const { addSchema, favoriteSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", isValidToken, getAllContacts);

router.get("/:contactId", isValidToken, isValidId, getContactById);

router.post("/", isValidToken, validateBody(addSchema), addNewContact);

router.delete("/:contactId", isValidToken, isValidId, deleteContactById);

router.put(
  "/:contactId",
  isValidToken,
  isValidId,
  validateBody(addSchema),
  updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidToken,
  isValidId,
  validateBody(favoriteSchema),
  updateStatusContact
);

module.exports = router;
