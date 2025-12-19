"use client";

import { trpc } from "@/lib/trpc";
import { useUser } from "@/lib/UserContext";
import type { UserRole } from "@/types/UserRole";
import { useEffect } from "react";

const ROLES: Record<UserRole, { label: string }> = {
  ADMIN: { label: "Admin" },
  ANALYST: { label: "Analyst" },
  CUSTOMER: { label: "Customer" },
};

export function UserPanel() {
  const { user, setUserRole } = useUser();
  const me = trpc.getMe.useQuery();
  const utils = trpc.useUtils();

  // Refetch when user changes
  useEffect(() => {
    utils.getMe.invalidate();
  }, [user, utils]);

  return (
    <div className="flex w-full items-center justify-between gap-6 rounded-xl border border-zinc-200 px-5 py-4 dark:border-zinc-800">
      {/* User Selector */}
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
          Switch role:
        </label>
        <select
          value={user.role}
          onChange={(e) => setUserRole(e.target.value as UserRole)}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 focus:border-zinc-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        >
          {Object.entries(ROLES).map(([role, { label }]) => (
            <option key={role} value={role}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Current User Info */}
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        {me.isLoading ? (
          <span className="text-zinc-500">Loading...</span>
        ) : me.error ? (
          <span className="text-red-500">Error</span>
        ) : (
          <span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              {me.data?.role}
            </span>
            <span className="ml-2 text-zinc-400 dark:text-zinc-500">
              #{me.data?.id}
              {me.data?.orgId && ` (${me.data.orgId})`}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
