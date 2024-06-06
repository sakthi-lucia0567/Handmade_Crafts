import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

export const userRegister = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if the user already exists
    // Check if the email already exists
    const existingEmailUser = await User.findOne({
      where: { email },
    });

    if (existingEmailUser) {
      return res.status(409).json({ message: "Email Already Exists" });
    }

    // Check if the phone already exists
    const existingPhoneUser = await User.findOne({
      where: { phone },
    });

    if (existingPhoneUser) {
      return res.status(409).json({ message: "Phone Already Exists" });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new user using Sequelize
    const newUser = await User.create({
      username,
      email,
      password: passwordHash,
      phone,
    });

    res
      .status(201)
      .json({ userId: newUser.id, message: "User Created SuccessFully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: err.message, message: "Internal Server Error" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "User does not exist" });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch)
      return res.status(400).json({ message: "Invalid User Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res
      .status(200)
      .json({ userID: user.id, token, message: "Login Successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: err.message, message: "Internal Server Error" });
  }
};
