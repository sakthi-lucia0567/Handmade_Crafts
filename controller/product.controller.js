import Product from "../models/product.model.js";

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
      category,
    });

    if (!newProduct) {
      return res.status(400).json({ message: "Product not created" });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single product
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product
const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.update({
      name,
      description,
      price,
      category,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a product
const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.destroy();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
