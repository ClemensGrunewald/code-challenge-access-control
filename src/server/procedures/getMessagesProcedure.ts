import { MOCK_CHAT_MESSAGES } from "../consts/MOCK_CHAT_MESSAGES";
import { privateProcedure } from "../trpc";

export const getMessagesProcedure = privateProcedure.query(async ({ ctx }) => {
  const { user: _user } = ctx;

  // =============================================================================
  // TODO: Implement strict access control based on user roles.
  // =============================================================================
  //
  // GOAL: Refactor this procedure to enforce strict access control based on user roles.
  // Currently, this endpoint dumps the entire database to everyone - a massive security violation!
  //
  // -----------------------------------------------------------------------------
  // ROLE DEFINITIONS:
  // -----------------------------------------------------------------------------
  //
  // 1. ADMIN:
  //    - Can see EVERYTHING (all organizations + all PII)
  //    - No filtering required
  //
  // 2. CUSTOMER:
  //    - Multi-Tenancy Rule: Can ONLY see messages belonging to their own orgId
  //    - Can see PII (it's their own organization's data)
  //    - Attempting to access other orgs should be prevented
  //
  // 3. ANALYST:
  //    - Can see ALL organizations (for global trend analysis)
  //    - Privacy Rule: MUST NOT see PII (Names, Emails, IP addresses)
  //    - Must scrub the `sender` details from the response
  //
  // =============================================================================

  return MOCK_CHAT_MESSAGES;
});
