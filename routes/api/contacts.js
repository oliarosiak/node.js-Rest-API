const express = require("express");

const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");
const { addSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody(addSchema, "Missing required name field"), add);

router.delete("/:contactId", deleteById);

router.put(
  "/:contactId",
  validateBody(addSchema, "Missing fields"),
  updateById
);

module.exports = router;
