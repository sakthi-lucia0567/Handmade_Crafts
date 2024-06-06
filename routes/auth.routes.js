import express from "express";

import { userLogin, userRegister } from "../controller/auth.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";

import {
  userLoginSchema,
  userRegisterSchema,
} from "../validate/user.validation.js";

const router = express.Router();

router.post("/register", validateBody(userRegisterSchema), userRegister);
router.post("/login", validateBody(userLoginSchema), userLogin);

export { router as authRouter };
