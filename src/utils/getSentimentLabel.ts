export function getSentimentLabel(sentiment: number): string {
  if (sentiment >= 0.7) return "Very Positive";
  if (sentiment >= 0.3) return "Positive";
  if (sentiment <= -0.7) return "Very Negative";
  if (sentiment <= -0.3) return "Negative";
  return "Neutral";
}
