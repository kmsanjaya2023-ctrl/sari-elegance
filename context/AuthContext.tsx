"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AuthUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextValue {
  user: AuthUser | null;
  isHydrated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const STORAGE_KEY = "sari-elegance-auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setUser(JSON.parse(stored));
    } catch {
      // ignore
    } finally {
      setIsHydrated(true);
    }
  }, []);

  const persist = (u: AuthUser | null) => {
    setUser(u);
    if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    else localStorage.removeItem(STORAGE_KEY);
  };

  // NOTE: This is a demo authentication flow for UI purposes only.
  // Replace with real authentication (e.g. NextAuth, Supabase Auth,
  // or a custom API) before going to production.
  const login: AuthContextValue["login"] = async (email, password) => {
    if (!email || !password) return { ok: false, error: "Email and password are required" };
    const isAdmin = email.toLowerCase().includes("admin");
    persist({ name: email.split("@")[0], email, isAdmin });
    return { ok: true };
  };

  const register: AuthContextValue["register"] = async (name, email, password) => {
    if (!name || !email || password.length < 6) {
      return { ok: false, error: "Please fill all fields; password must be 6+ characters" };
    }
    persist({ name, email, isAdmin: email.toLowerCase().includes("admin") });
    return { ok: true };
  };

  const logout = () => persist(null);

  return (
    <AuthContext.Provider value={{ user, isHydrated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
