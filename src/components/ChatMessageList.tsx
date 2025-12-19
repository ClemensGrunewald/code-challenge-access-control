"use client";

import { trpc } from "@/lib/trpc";
import { useUser } from "@/lib/UserContext";
import { useEffect } from "react";
import { MessageCard } from "./MessageCard";

export function ChatMessageList() {
  const { user } = useUser();
  const { data: messages = [], isLoading, error } = trpc.getMessages.useQuery();
  const utils = trpc.useUtils();

  // Refetch when user changes
  useEffect(() => {
    utils.getMessages.invalidate();
  }, [user, utils]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Messages
          </h2>
        </div>
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/50"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-rose-200 bg-rose-50 p-6 text-center dark:border-rose-900 dark:bg-rose-950/30">
        <p className="text-sm font-medium text-rose-600 dark:text-rose-400">
          Failed to load messages
        </p>
        <p className="mt-1 text-xs text-rose-500/80 dark:text-rose-400/60">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Messages
        </h2>
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {messages.length} total
        </span>
      </header>

      <div className="grid gap-4">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
}
