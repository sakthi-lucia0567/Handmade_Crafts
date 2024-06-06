import express from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controller/product.controller.js";

import {
  validateBody,
  validateParams,
} from "../middleware/validate.middleware.js";

import {
  createProductSchema,
  updateProductSchema,
  idSchema,
} from "../validate/product.validation.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(createProductSchema),
  createProduct
);
router.get("/", getAllProducts);
router.get("/:id", validateParams(idSchema), getProductById);
router.put(
  "/:id",
  authenticate,
  validateParams(idSchema),
  validateBody(updateProductSchema),
  updateProductById
);
router.delete(
  "/:id",
  authenticate,
  validateParams(idSchema),
  deleteProductById
);

export { router as productRouter };
