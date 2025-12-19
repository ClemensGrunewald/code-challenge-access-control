export const UserRole = {
  ADMIN: "ADMIN",
  ANALYST: "ANALYST",
  CUSTOMER: "CUSTOMER",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];
