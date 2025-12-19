"use client";

import type { User } from "@/types/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useEffect, useState } from "react";
import { trpc } from "./trpc";
import { useUser } from "./UserContext";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Browser should use relative path
    return "";
  }
  // SSR should use localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

// Store user in module scope for header access (updated via effect)
let currentUser: User | null = null;

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  // Update module-scope user via effect
  // The headers callback is called on each request (not during render),
  // so by the time a request is made, the effect will have run
  useEffect(() => {
    currentUser = user;
  }, [user]);

  // Create stable client instances (only once)
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          // This callback is called on each request, so it always gets the latest user
          headers: () => ({
            "x-user": JSON.stringify(currentUser),
          }),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
