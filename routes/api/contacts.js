const express = require("express");

const {
  getAllContacts,
  getContactById,
  addNewContact,
  deleteContactById,
  updateContactById,
  updateStatusContact,
} = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");
const { addSchema, favoriteSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", validateBody(addSchema), addNewContact);

router.delete("/:contactId", isValidId, deleteContactById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchema),
  updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(favoriteSchema),
  updateStatusContact
);

module.exports = router;
