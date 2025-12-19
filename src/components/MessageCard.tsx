import { AppRouterOutputs } from "@/types/AppRouterOutputs";
import { formatDate } from "@/utils/formatDate";
import { MetadataChip } from "./MetadataChip";
import { SentimentBadge } from "./SentimentBadge";

interface Props {
  message: AppRouterOutputs["getMessages"][number];
}

export function MessageCard({ message }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Header */}
      <header className="mb-3 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-semibold text-white shadow-sm">
            {message.sender.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {message.sender.name}
              {message.sender.verified && (
                <svg
                  className="h-4 w-4 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-label="Verified"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {message.sender.email}
            </p>
          </div>
        </div>
        <time className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
          {formatDate(message.sentAt)}
        </time>
      </header>

      {/* Message Text */}
      <p className="mb-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
        {message.text}
      </p>

      {/* Footer with Sentiment & Tags */}
      <footer className="flex flex-wrap items-center gap-3">
        <SentimentBadge sentiment={message.metadata.sentiment} />
        <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
        <div className="flex flex-wrap gap-1.5">
          {message.metadata.tags.map((tag) => (
            <MetadataChip key={tag} tag={tag} />
          ))}
        </div>
      </footer>
    </article>
  );
}
