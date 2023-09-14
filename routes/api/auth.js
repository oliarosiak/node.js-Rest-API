const express = require("express");

const { validateBody, isValidToken, upload } = require("../../middlewares");
const {
  registerJoiSchema,
  loginJoiSchema,
  subscriptionJoiSchema,
  emailJoiSchema,
} = require("../../schemas/users");
const {
  register,
  verify,
  login,
  current,
  logout,
  subscription,
  avatar,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(registerJoiSchema), register);

router.get("/verify/:verificationToken", verify.email);

router.post("/verify", validateBody(emailJoiSchema), verify.resend);

router.post("/login", validateBody(loginJoiSchema), login);

router.get("/current", isValidToken, current);

router.post("/logout", isValidToken, logout);

router.patch(
  "/",
  isValidToken,
  validateBody(subscriptionJoiSchema),
  subscription
);

router.patch("/avatars", isValidToken, upload.single("avatar"), avatar);

module.exports = router;
