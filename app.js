import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello Api..!");
});

app.get("/api/healthCheck", (req, res) => {
  res.send("Api Running Successfully :)");
});

app.use("/api/v1", router);

const PORT = process.env.PORT || 8001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
