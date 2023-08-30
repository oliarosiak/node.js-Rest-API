const Joi = require("joi");

const { emailRegexp } = require('../models/user');

const registerJoiSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "string.min": "password should have at least 6 characters",
    "any.required": "missing required password field",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.pattern.base": "Something wrong with email",
    "any.required": "missing required email field",
  }),
});

const loginJoiSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "string.empty": "the 'password' field must contain value",
    "string.min": "password should have at least 6 characters",
    "any.required": "missing required password field",
  }),
  email: Joi.string().pattern(emailRegexp).required().messages({
    "string.empty": "the 'email' field must contain value",
    "string.pattern.base": "the 'email' field is filled out incorrectly",
    "any.required": "missing required email field",
  }),
});

module.exports = {
  registerJoiSchema,
  loginJoiSchema,
};