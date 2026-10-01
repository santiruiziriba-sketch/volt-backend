import { celebrate, Joi } from "celebrate";

export const validateSignup = celebrate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

export const validateSignin = celebrate({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

export const validateRoutineId = celebrate({
  params: Joi.object({
    routineId: Joi.string().hex().length(24).required(),
  }),
});
