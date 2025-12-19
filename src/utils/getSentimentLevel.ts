import { SentimentLevel } from "../types/SentimentLevel";

export function getSentimentLevel(sentiment: number): SentimentLevel {
  if (sentiment >= 0.3) return "positive";
  if (sentiment <= -0.3) return "negative";
  return "neutral";
}
