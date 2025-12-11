"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Package, Store, ShoppingBag, LogOut, Plus } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"

export function CustomerSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { logout } = useAuth()

  const navItems = [
    {
      href: "/customer-panel",
      label: "Add Product",
      icon: Plus,
      exact: true,
    },
    {
      href: "/customer-panel/my-products",
      label: "My Products",
      icon: Store,
    },
    {
      href: "/customer-panel/orders",
      label: "Orders",
      icon: ShoppingBag,
    },
  ]

  const isActive = useCallback(
    (href: string, exact = false) => {
      if (exact) {
        return pathname === href
      }
      return pathname.startsWith(href)
    },
    [pathname],
  )

  const handleLogout = useCallback(() => {
    logout()
    router.push("/")
  }, [logout, router])

  return (
    <aside className="w-full md:w-64 bg-card border-r border-border px-4 py-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Package className="h-6 w-6 text-accent" />
          Customer Panel
        </h2>
      </div>

      <nav className="space-y-2 mb-8">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.href, item.exact)
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border pt-6">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 bg-transparent"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
