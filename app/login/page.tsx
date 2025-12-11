"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { ArrowRight, User, Building2 } from "lucide-react"

export default function LoginPage() {
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
      if (email && password.length >= 6) {
        const user = {
          name: email.split("@")[0],
          email: email,
        }
        login(user, "token-" + Date.now())
        setSuccess(true)
        setTimeout(() => {
          // Redirect will be handled by the useEffect above
        }, 1000)
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
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Choose your login type</p>
          </div>

          <div className="space-y-4">
            <Link href="/login/user">
              <Button className="w-full gap-3 py-6 text-base bg-transparent" variant="outline">
                <User className="h-5 w-5" />
                <div className="flex-1 text-left">
                  <div className="font-semibold">User Login</div>
                  <div className="text-xs text-muted-foreground">For regular customers</div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/login/customer">
              <Button className="w-full gap-3 py-6 text-base bg-transparent" variant="outline">
                <Building2 className="h-5 w-5" />
                <div className="flex-1 text-left">
                  <div className="font-semibold">Customer Login</div>
                  <div className="text-xs text-muted-foreground">For business accounts</div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 p-4 rounded-lg bg-muted/50">
            <p className="text-center text-sm text-muted-foreground mb-2">Don't have an account?</p>
            <Link href="/register" className="block text-center">
              <Button className="w-full" variant="default">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
