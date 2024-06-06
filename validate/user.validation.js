import Joi from "joi";

// Schema for user registration
export const userRegisterSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().required(),
  phone: Joi.number()
    .integer()
    .min(10 ** 9)
    .max(10 ** 10 - 1)
    .required()
    .messages({
      "number.min": "Mobile number should be 10 digit.",
      "number.max": "Mobile number should be 10 digit",
    }),
});

// Schema for user login
export const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
