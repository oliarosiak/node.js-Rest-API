require("dotenv").config();

const { BASE_URL } = process.env;
const { User } = require("../../models/user");
const { HttpError, ctrlWrapper, sendEmail } = require("../../helpers");

const email = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.status(200).json({
    message: "Verification successful",
  });
};

const resend = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const veryfyEmail = {
    to: email,
    subject: "Verify your email",
    html: `<a target='_blank' href='${BASE_URL}/api/auth/verify/${user.verificationToken}'>Clich here to verify your email</a>`,
  };

  await sendEmail(veryfyEmail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

const verify = {
  email: ctrlWrapper(email),
  resend: ctrlWrapper(resend),
};

module.exports = {
  verify,
};
