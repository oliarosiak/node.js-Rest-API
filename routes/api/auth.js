const express = require("express");

const { validateBody, isValidToken } = require("../../middlewares");
const { schemas } = require("../../models/user");

const { register, login, current, logout } = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.userRegisterSchema), register);

router.post("/login", validateBody(schemas.userLoginSchema), login);

router.get("/current", isValidToken, current);

router.post("/logout", isValidToken, logout);

module.exports = router;
