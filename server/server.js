// Imports
import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

// Initiliase express
const app = express();

// Use express and cors
app.use(cors());
app.use(express.json()); // Use JSON to manipulate data

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

// Create (POST) new data in the supabase
app.post("/add-PawsomeDaycare", (req, res) => {
  const newPawsomeDaycare = req.body;
  const query = db.query(
    `INSERT INTO PawsomeDaycare (fullname, petname, email, review) VALUES ($1, $2, $3, $4)`,
    [
      newPawsomeDaycare.formValues.fullname,
      newPawsomeDaycare.formValues.petname,
      newPawsomeDaycare.formValues.email,
      newPawsomeDaycare.formValues.review,
    ]
  );
  res.json("Data sent", query);
});
