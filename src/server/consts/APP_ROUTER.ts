import { getMeProcedure } from "../procedures/getMeProcedure";
import { getMessagesProcedure } from "../procedures/getMessagesProcedure";
import { router } from "../trpc";

export const APP_ROUTER = router({
  getMe: getMeProcedure,
  getMessages: getMessagesProcedure,
});

export type AppRouter = typeof APP_ROUTER;
