"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { ShoppingCart, Menu, X, Heart, LogIn, UserPlus, Search, Camera, Mic, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { getUserInitial } from "@/lib/auth-utils"
import { ImageSearchModal } from "@/components/image-search-modal"
import { useVoiceSearch } from "@/hooks/use-voice-search"

export function Header({
  cartCount = 0,
  wishlistCount = 0,
  onMenuClick = () => {},
}: { cartCount?: number; wishlistCount?: number; onMenuClick?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { isAuthenticated, user, logout, isLoading, userType } = useAuth()
  const [avatarOpen, setAvatarOpen] = useState(false)
  const [imageSearchOpen, setImageSearchOpen] = useState(false)
  const { isListening, transcript, startListening, stopListening } = useVoiceSearch()
  const router = useRouter()

  useEffect(() => {
    if (transcript && !isListening) {
      setSearchTerm(transcript)
    }
  }, [transcript, isListening])

  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      if (searchTerm.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      } else {
        router.push("/search")
      }
    },
    [searchTerm, router],
  )

  const handleImageSearch = useCallback(
    (imageBase64: string) => {
      router.push(`/search?image=true`)
    },
    [router],
  )

  const handleLogout = useCallback(() => {
    setAvatarOpen(false)
    logout()
    setTimeout(() => {
      const redirectUrl = userType === "customer" ? "/login/customer" : "/"
      router.push(redirectUrl)
    }, 100)
  }, [logout, router, userType])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-avatar-menu]") && !target.closest("[data-avatar-button]")) {
        setAvatarOpen(false)
      }
    }

    if (avatarOpen) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [avatarOpen])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 gap-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick} title="Open Menu">
              <Menu className="h-5 w-5" />
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                M
              </div>
              <span className="hidden font-semibold md:inline">ModernStore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            <Link href="/" className="text-sm font-medium transition hover:text-accent">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium transition hover:text-accent">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium transition hover:text-accent">
              About
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-xs mx-2">
            <div className="relative w-full flex items-center">
              {/* Microphone icon on left side */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={isListening ? stopListening : startListening}
                className="absolute left-2 h-8 w-8 p-0 hover:bg-muted"
                title={isListening ? "Stop listening" : "Start voice search"}
              >
                {isListening ? <Loader2 className="h-4 w-4 animate-spin text-accent" /> : <Mic className="h-4 w-4" />}
              </Button>

              <input
                type="text"
                placeholder="Search, voice, or upload image..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-input text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                title="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Right Side - Icons & Menu */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setImageSearchOpen(true)}
              title="Search by image"
              className="hidden md:inline-flex"
            >
              <Camera className="h-5 w-5" />
            </Button>

            <Link href="/wishlist" className="relative">
              <Button variant="ghost" size="icon" title="Wishlist">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold w-5 h-5">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart Icon */}
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="icon" title="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold w-5 h-5">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {!isLoading && (
              <>
                {!isAuthenticated ? (
                  <div className="hidden gap-2 md:flex">
                    <Link href="/login">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <LogIn className="h-4 w-4" />
                        <span className="hidden sm:inline">Login</span>
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button size="sm" className="gap-2">
                        <UserPlus className="h-4 w-4" />
                        <span className="hidden sm:inline">Sign Up</span>
                      </Button>
                    </Link>
                  </div>
                ) : (
                  // Avatar with dropdown
                  <div className="relative hidden md:block" data-avatar-menu>
                    <button
                      data-avatar-button
                      onClick={() => setAvatarOpen(!avatarOpen)}
                      className="flex items-center justify-center h-9 w-9 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:ring-2 hover:ring-accent/50 transition-all"
                      title={user?.name || user?.email}
                    >
                      {getUserInitial(user?.name, user?.email)}
                    </button>

                    {avatarOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-lg border border-border bg-card shadow-lg z-50">
                        <div className="p-4 border-b border-border">
                          <p className="text-sm font-semibold">{user?.name}</p>
                          <p className="text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                        <div className="p-2 space-y-1">
                          {userType === "customer" && (
                            <Link href="/customer-panel" onClick={() => setAvatarOpen(false)}>
                              <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition">
                                My Store
                              </button>
                            </Link>
                          )}
                          <Link href="/account" onClick={() => setAvatarOpen(false)}>
                            <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition">
                              Edit Profile
                            </button>
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-3 py-2 text-sm rounded hover:bg-secondary transition text-destructive"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} title="Toggle mobile menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={isListening ? stopListening : startListening}
                  className="h-9 w-9 p-0"
                  title={isListening ? "Stop listening" : "Start voice search"}
                >
                  {isListening ? <Loader2 className="h-4 w-4 animate-spin text-accent" /> : <Mic className="h-4 w-4" />}
                </Button>

                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg border border-border bg-input text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button type="submit" className="p-2 rounded hover:bg-secondary transition" title="Search">
                  <Search className="h-4 w-4" />
                </button>
              </form>

              <button
                onClick={() => setImageSearchOpen(true)}
                className="w-full p-2 rounded hover:bg-secondary transition flex items-center justify-center gap-2"
                title="Search by image"
              >
                <Camera className="h-4 w-4" />
                <span className="text-sm font-medium">Search by Image</span>
              </button>

              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
              <Link href="/products" className="text-sm font-medium">
                Products
              </Link>
              <Link href="/wishlist" className="text-sm font-medium">
                Wishlist
              </Link>
              <Link href="/about" className="text-sm font-medium">
                About
              </Link>
              {!isLoading && (
                <>
                  {!isAuthenticated ? (
                    <div className="flex gap-2 pt-2">
                      <Link href="/login" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Login
                        </Button>
                      </Link>
                      <Link href="/register" className="flex-1">
                        <Button size="sm" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 pt-2 border-t border-border">
                      {userType === "customer" && (
                        <Link href="/customer-panel">
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            My Store
                          </Button>
                        </Link>
                      )}
                      <Link href="/account">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Edit Profile
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent text-destructive hover:text-destructive"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </header>

      <ImageSearchModal
        open={imageSearchOpen}
        onClose={() => setImageSearchOpen(false)}
        onImageSelected={handleImageSearch}
      />
    </>
  )
}
