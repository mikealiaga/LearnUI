import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

app.post("/api/generate", async (req: Request, res: Response) => {
  const { difficulty = "medium" } = req.body;

  const basePrompt = `
  Generate a UX/UI design challenge with:
  - A project idea in one sentence (like: "Design a customer loyalty app")
  - A context (like: "for a food truck business")
  - Keep it concise and beginner-friendly
  - Difficulty: ${difficulty}
  Format the response as JSON:
  {
    "what": "...",
    "for": "..."
  }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: basePrompt }],
      temperature: 0.8,
    });

    const content = response.choices[0].message.content || "{}";
    const parsed = JSON.parse(content);
    res.json(parsed);
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "Failed to generate prompt" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});