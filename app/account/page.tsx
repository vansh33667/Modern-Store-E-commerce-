"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, LogOut, User, Heart, MapPin } from "lucide-react"

interface UserData {
  name: string
  email: string
}

export default function AccountPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    } else {
      window.location.href = "/login"
    }
    setIsLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header cartCount={0} />
        <div className="flex-1" />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 text-accent hover:underline mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Link>

          <div className="mb-12">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">My Account</h1>
                <p className="text-muted-foreground">Manage your profile and preferences</p>
              </div>
              <Button variant="destructive" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Profile Card */}
              <div className="md:col-span-2 rounded-lg border border-border bg-card p-8">
                <h2 className="font-semibold text-lg mb-6">Profile Information</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background"
                    />
                  </div>
                  <Button className="w-full">Update Profile</Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="/orders">
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition flex items-center gap-2 text-sm font-medium">
                        <Heart className="h-4 w-4" />
                        My Orders
                      </button>
                    </Link>
                    <Link href="/account/addresses">
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition flex items-center gap-2 text-sm font-medium">
                        <MapPin className="h-4 w-4" />
                        Addresses
                      </button>
                    </Link>
                    <Link href="/account/settings">
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-secondary transition flex items-center gap-2 text-sm font-medium">
                        <User className="h-4 w-4" />
                        Settings
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold mb-3">Account Stats</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Orders</span>
                      <span className="font-semibold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Spent</span>
                      <span className="font-semibold">$4,877.94</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Member Since</span>
                      <span className="font-semibold">Dec 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
