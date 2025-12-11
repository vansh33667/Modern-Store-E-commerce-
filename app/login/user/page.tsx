"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react"

export default function UserLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const { login, isAuthenticated, isLoading: authLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      const redirectUrl = sessionStorage.getItem("redirectAfterLogin")
      sessionStorage.removeItem("redirectAfterLogin")
      router.push(redirectUrl || "/")
    }
  }, [isAuthenticated, authLoading, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        const user = JSON.parse(storedUser)
        if (user.type !== "user") {
          setError("This login is only for regular users. Please use Customer Login.")
          setIsLoading(false)
          return
        }
      } else {
        setError("Please create an account first before logging in.")
        setIsLoading(false)
        return
      }

      if (email && password.length >= 6) {
        const user = {
          name: email.split("@")[0],
          email: email,
          type: "user" as const,
        }
        login(user, "token-" + Date.now())
        setSuccess(true)
      } else {
        setError("Please enter a valid email and password (min 6 characters)")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <Link href="/login" className="flex items-center gap-2 text-accent hover:underline mb-6 text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to login options
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">User Login</h1>
            <p className="text-muted-foreground">Sign in to your regular customer account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 text-sm dark:bg-green-900 dark:border-green-700 dark:text-green-100">
                Login successful! Redirecting...
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <Link href="#" className="text-accent hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full gap-2" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In as User"}
              {!isLoading && <ArrowRight className="h-4 w-4" />}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-accent hover:underline font-medium">
              Create one now
            </Link>
          </p>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-center text-xs text-muted-foreground mb-3">Demo credentials:</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Email: demo@example.com</p>
              <p>Password: demo123</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
