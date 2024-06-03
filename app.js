import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
