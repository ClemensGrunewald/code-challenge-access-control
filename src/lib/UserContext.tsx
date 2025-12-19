"use client";

import type { User } from "@/types/User";
import type { UserRole } from "@/types/UserRole";
import { createContext, useCallback, useContext, useState } from "react";

// Predefined mock users for each role
const MOCK_USERS: Record<UserRole, User> = {
  ADMIN: {
    id: "admin-001",
    role: "ADMIN",
  },
  ANALYST: {
    id: "analyst-002",
    role: "ANALYST",
  },
  CUSTOMER: {
    id: "customer-003",
    role: "CUSTOMER",
    orgId: "org-acme", // Matches mock data - will see 5 messages from org-acme
  },
};

type UserContextType = {
  user: User;
  setUserRole: (role: UserRole) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(MOCK_USERS.CUSTOMER);

  const setUserRole = useCallback((role: UserRole) => {
    setUser(MOCK_USERS[role]);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
