const { User } = require("../../models/user");
const { ctrlWrapper } = require("../../helpers");

const subscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  res.status(200).json({
    subscription: user.subscription,
  });
};

module.exports = {
  subscription: ctrlWrapper(subscription),
};
