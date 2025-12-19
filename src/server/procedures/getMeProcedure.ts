import { privateProcedure } from "../trpc";

/**
 * Get the current user
 */
export const getMeProcedure = privateProcedure.query(({ ctx }) => {
  return ctx.user;
});
