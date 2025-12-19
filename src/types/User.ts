import { UserRole } from "./UserRole";

export type User = {
  id: string;
  role: UserRole;
  orgId?: string;
};
