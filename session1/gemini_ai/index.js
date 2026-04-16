//AIzaSyDAUzC-B7m35wHjkDJBHFdIJbB_o55dP2g
import { GoogleGenAI } from "@google/genai";
import "dotenv/config"

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how chatGpt works in a stepwise",
  });
  console.log(response.text);
}

main();