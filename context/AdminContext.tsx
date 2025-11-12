"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type AdminContextType = {
  authed: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const DEMO_PASSWORD = "admin123"; // Replace via env in production

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" && window.sessionStorage.getItem("uc_authed");
    setAuthed(saved === "1");
  }, []);

  const value = useMemo<AdminContextType>(
    () => ({
      authed,
      async login(password: string) {
        const ok = password === DEMO_PASSWORD;
        if (ok) {
          window.sessionStorage.setItem("uc_authed", "1");
          setAuthed(true);
        }
        return ok;
      },
      logout() {
        window.sessionStorage.removeItem("uc_authed");
        setAuthed(false);
      }
    }),
    [authed]
  );

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}

