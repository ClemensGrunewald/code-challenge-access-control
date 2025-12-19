import type { AppRouter } from "@/server/consts/APP_ROUTER";
import type { inferRouterOutputs } from "@trpc/server";

export type AppRouterOutputs = inferRouterOutputs<AppRouter>;
