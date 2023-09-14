const { register } = require("./register");
const { verify } = require("./verify");
const { login } = require("./login");
const { current } = require("./current");
const { logout } = require("./logout");
const { subscription } = require("./subscription");
const { avatar } = require("./avatar");

module.exports = {
  register,
  verify,
  login,
  current,
  logout,
  subscription,
  avatar,
};
