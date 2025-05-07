import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();
console.log("🔐 OPENAI_API_KEY loaded:", process.env.OPENAI_API_KEY?.slice(0, 8) + "...");

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://learnui-plum.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("🔍 Incoming request origin:", origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn("❌ Blocked origin:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["POST", "OPTIONS"],
  })
);
app.use(express.json());

app.options("*", cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

app.post("/api/generate", async (req: Request, res: Response) => {
  const { difficulty = "easy" } = req.body;

  const basePrompt = `
Generate a UX/UI design challenge with the following requirements:
- Return a JSON object with two properties: "what" and "for"
- "what": a project idea that starts with "a" or "an" (e.g., "a budgeting app", "an appointment scheduler")
- "for": a target audience or industry, but do not include the word "for" (e.g., "college students", "dog shelters")
- Ensure "what" and "for" are completely independent and reusable in different combinations
- Do not reference each other in the wording
- Avoid similar sentence structures or word repetition in follow-up requests
- Make ideas general, versatile, and interesting
- Be creative and throw different results each time
- Keep responses short and in plain JSON:
{
  "what": "...",
  "for": "..."
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a creative UX/UI design assistant. Your job is to come up with original, unique, and diverse practice ideas for interface designers."
        },
        {
          role: "user",
          content: basePrompt
        }
      ],
      temperature: 1.2,
    });

    const content = response.choices[0].message.content || "{}";
    const cleaned = content
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/, "");

  const parsed = JSON.parse(cleaned);
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