import express from "express";
import cors from "cors";
import assistantRoute from "./routes/assistant.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
console.log("API Key loaded:", !!process.env.OPENAI_API_KEY);

app.use("/api/assistant", assistantRoute);

app.listen(5000, () =>
  console.log(
    "Backend running on http://localhost:5000 Api key is " +
      process.env.OPENAI_API_KEY
  )
);
