"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Lock, User, Phone, Building2, FileText, ArrowRight } from "lucide-react"
import { validatePAN, validateGST, validateEmail, validatePhone } from "@/lib/validation-utils"

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<"user" | "customer">("user")

  // User account fields
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  // Customer account fields
  const [customerName, setCustomerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerPassword, setCustomerPassword] = useState("")
  const [customerConfirmPassword, setCustomerConfirmPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [panNumber, setPanNumber] = useState("")
  const [gstNumber, setGstNumber] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      const user = { name, email, type: "user" as const }
      localStorage.setItem("user", JSON.stringify(user))
      setSuccess(true)
      setTimeout(() => {
        window.location.href = "/login"
      }, 1500)
      setIsLoading(false)
    }, 1000)
  }

  const handleCustomerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (
      !customerName ||
      !customerEmail ||
      !customerPassword ||
      !customerConfirmPassword ||
      !phone ||
      !businessName ||
      !panNumber ||
      !gstNumber
    ) {
      setError("All fields are required")
      return
    }

    if (!validateEmail(customerEmail)) {
      setError("Please enter a valid email address")
      return
    }

    if (!validatePhone(phone)) {
      setError("Please enter a valid 10-digit phone number")
      return
    }

    if (!validatePAN(panNumber.toUpperCase())) {
      setError("Invalid PAN Number. Please enter a valid one.")
      return
    }

    if (!validateGST(gstNumber.toUpperCase())) {
      setError("Invalid GST Number. Please enter a valid one.")
      return
    }

    if (customerPassword.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }

    if (customerPassword !== customerConfirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      const user = {
        name: customerName,
        email: customerEmail,
        type: "customer" as const,
        phone,
        businessName,
        panNumber: panNumber.toUpperCase(),
        gstNumber: gstNumber.toUpperCase(),
      }
      localStorage.setItem("user", JSON.stringify(user))
      setSuccess(true)
      setTimeout(() => {
        window.location.href = "/login/customer"
      }, 1500)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">Choose your account type to get started</p>
          </div>

          {/* Account Type Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setAccountType("user")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                accountType === "user" ? "bg-accent text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Create User Account
            </button>
            <button
              onClick={() => setAccountType("customer")}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                accountType === "customer" ? "bg-accent text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Create Customer Account
            </button>
          </div>

          {/* User Account Form */}
          {accountType === "user" && (
            <form onSubmit={handleUserSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 text-sm dark:bg-green-900 dark:border-green-700 dark:text-green-100">
                  Account created! Redirecting to login...
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

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
                <p className="text-xs text-muted-foreground mt-1">Minimum 6 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" required className="mt-1" />
                <span className="text-muted-foreground">I agree to the Terms of Service and Privacy Policy</span>
              </label>

              <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create User Account"}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          )}

          {/* Customer Account Form */}
          {accountType === "customer" && (
            <form onSubmit={handleCustomerSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 text-sm dark:bg-green-900 dark:border-green-700 dark:text-green-100">
                  Account created! Redirecting to login...
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="business@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Business Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your Business Name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">PAN Number</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={panNumber}
                      onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                      placeholder="AAAAA0000A"
                      maxLength={10}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent uppercase"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Format: AAAAA0000A</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">GST Number</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={gstNumber}
                      onChange={(e) => setGstNumber(e.target.value.toUpperCase())}
                      placeholder="00AAAAA0000A1Z5"
                      maxLength={15}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent uppercase"
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Format: 00AAAAA0000A1Z5</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={customerPassword}
                    onChange={(e) => setCustomerPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Minimum 6 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={customerConfirmPassword}
                    onChange={(e) => setCustomerConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <label className="flex items-start gap-2 text-sm">
                <input type="checkbox" required className="mt-1" />
                <span className="text-muted-foreground">I agree to the Terms of Service and Privacy Policy</span>
              </label>

              <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Customer Account"}
                {!isLoading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-accent hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
