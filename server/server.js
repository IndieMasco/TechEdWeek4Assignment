// Imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// Initiliase express and cors
const app = express();
app.use(cors());
app.use(express.json());

// Set up a port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

// Set up a root route
app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

// I want to READ fullname, petname, review data from my table
app.get("/PawsomeDaycare", async function (req, res) {
  const query = await db.query(`SELECT * FROM PawsomeDaycare;`);
  // console.log(query);
  res.json(query.rows);
});
