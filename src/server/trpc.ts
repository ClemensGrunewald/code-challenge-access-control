import type { User } from "@/types/User";
import { initTRPC, TRPCError } from "@trpc/server";

/**
 * Context for tRPC procedures
 * Add any shared context like database connections, auth, etc.
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  // For simplicity (coding interview), user is populated by the frontend via header
  const userHeader = opts.headers.get("x-user");
  let user: User | null = null;

  if (userHeader) {
    try {
      user = JSON.parse(userHeader) as User;
    } catch {
      // Invalid JSON, user remains null
    }
  }

  return {
    headers: opts.headers,
    user,
  };
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

/**
 * Initialize tRPC
 */
const t = initTRPC.context<Context>().create();

/**
 * Export reusable router and procedure helpers
 */
export const router = t.router;
export const createCallerFactory = t.createCallerFactory;
export const publicProcedure = t.procedure;

/**
 * Private procedure - requires authenticated user
 * Throws UNAUTHORIZED if no user in context
 */
export const privateProcedure = publicProcedure.use(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource",
    });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});
