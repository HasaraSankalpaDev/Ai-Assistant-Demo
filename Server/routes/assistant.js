import express from "express";
import fetch from "node-fetch";
import { searchDocs } from "../utils/embeddings.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { messages } = req.body;

  // Get the last user message
  const lastMsg = messages[messages.length - 1].content;

  // Get context from the array-based dataset
  const context = await searchDocs(lastMsg);

  // Call OpenAI Responses API
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: [
        {
          role: "system",
          content:
            "You are a helpful assistant for a web development company. Use the provided context.",
        },
        { role: "user", content: lastMsg },
        { role: "assistant", content: `Context:\n${context}` },
      ],
      stream: false,
    }),
  });

  const data = await response.json();
  res.json(data);
});

export default router;
