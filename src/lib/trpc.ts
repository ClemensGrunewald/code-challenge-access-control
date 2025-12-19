import { AppRouter } from "@/server/consts/APP_ROUTER";
import { createTRPCReact } from "@trpc/react-query";

/**
 * tRPC React client
 * Use this to call your API from React components
 */
export const trpc = createTRPCReact<AppRouter>();
