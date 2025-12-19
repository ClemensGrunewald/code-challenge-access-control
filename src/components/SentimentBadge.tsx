import { SentimentLevel } from "@/types/SentimentLevel";
import { getSentimentLabel } from "@/utils/getSentimentLabel";
import { getSentimentLevel } from "@/utils/getSentimentLevel";

interface Props {
  sentiment: number;
}

export function SentimentBadge({ sentiment }: Props) {
  const level = getSentimentLevel(sentiment);
  const label = getSentimentLabel(sentiment);

  const sentimentStyles: Record<SentimentLevel, string> = {
    positive:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    neutral:
      "bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300 border-slate-200 dark:border-slate-700",
    negative:
      "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${sentimentStyles[level]}`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-pulse rounded-full opacity-50 ${
            level === "positive"
              ? "bg-emerald-400"
              : level === "negative"
              ? "bg-rose-400"
              : "bg-slate-400"
          }`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            level === "positive"
              ? "bg-emerald-500"
              : level === "negative"
              ? "bg-rose-500"
              : "bg-slate-500"
          }`}
        />
      </span>
      {label}
      <span className="ml-0.5 opacity-60">({sentiment.toFixed(2)})</span>
    </span>
  );
}
