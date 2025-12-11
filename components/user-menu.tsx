"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, LogOut, Settings } from "lucide-react"

interface UserMenuProps {
  user?: {
    name: string
    email: string
  }
  onLogout?: () => void
}

export function UserMenu({ user, onLogout }: UserMenuProps) {
  const [open, setOpen] = useState(false)

  if (!user) {
    return (
      <div className="flex gap-2">
        <Link href="/login">
          <Button variant="outline" size="sm" className="bg-transparent">
            Sign In
          </Button>
        </Link>
        <Link href="/register">
          <Button size="sm">Sign Up</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-secondary transition"
      >
        <div className="h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <span className="text-sm font-medium hidden md:inline">{user.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
          <div className="p-2 space-y-1">
            <Link href="/account">
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition flex items-center gap-2">
                <User className="h-4 w-4" />
                My Account
              </button>
            </Link>
            <Link href="/settings">
              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </button>
            </Link>
            <button
              onClick={() => {
                setOpen(false)
                onLogout?.()
              }}
              className="w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition flex items-center gap-2 text-destructive"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
