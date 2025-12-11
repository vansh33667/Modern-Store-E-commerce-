"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  name: string
  email: string
  type: "user" | "customer"
}

export interface CustomerUser extends User {
  type: "customer"
  phone: string
  businessName: string
  panNumber: string
  gstNumber: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User | CustomerUser | null
  token: string | null
  login: (user: User | CustomerUser, token?: string) => void
  logout: () => void
  isLoading: boolean
  userType: "user" | "customer" | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | CustomerUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    const storedToken = localStorage.getItem("token")

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setToken(storedToken)
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = (newUser: User | CustomerUser, newToken?: string) => {
    setUser(newUser)
    setIsAuthenticated(true)
    const authToken = newToken || "token-" + Date.now()
    setToken(authToken)

    // Persist to localStorage
    localStorage.setItem("user", JSON.stringify(newUser))
    localStorage.setItem("token", authToken)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setIsAuthenticated(false)

    // Clear localStorage
    localStorage.removeItem("user")
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        login,
        logout,
        isLoading,
        userType: user?.type || null,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
