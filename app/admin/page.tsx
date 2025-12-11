"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { BarChart3, Package, ShoppingCart, DollarSign, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const stats = [
    { label: "Total Revenue", value: "$24,856", change: "+12.5%", icon: DollarSign, positive: true },
    { label: "Total Orders", value: "1,284", change: "+8.2%", icon: ShoppingCart, positive: true },
    { label: "Products", value: "87", change: "+3", icon: Package, positive: true },
    { label: "Customers", value: "456", change: "+23%", icon: Users, positive: true },
  ]

  const recentOrders = [
    { id: "ORD-1001", customer: "John Doe", amount: "$949.97", status: "delivered", date: "Dec 1" },
    { id: "ORD-1002", customer: "Jane Smith", amount: "$227.99", status: "shipped", date: "Dec 5" },
    { id: "ORD-1003", customer: "Bob Wilson", amount: "$3,699.98", status: "processing", date: "Dec 8" },
    { id: "ORD-1004", customer: "Alice Brown", amount: "$599.96", status: "delivered", date: "Dec 9" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to ModernStore Admin</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="rounded-lg border border-border bg-card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-muted-foreground text-sm">{stat.label}</h3>
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="mb-2">
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <p
                    className={`text-xs font-semibold ${stat.positive ? "text-green-600 dark:text-green-400" : "text-destructive"}`}
                  >
                    {stat.change} from last month
                  </p>
                </div>
              )
            })}
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-semibold text-lg mb-4">Sales Trend</h2>
              <div className="h-64 flex items-center justify-center bg-secondary/20 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Sales chart visualization</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-semibold text-lg mb-4">Top Products</h2>
              <div className="space-y-3">
                {[
                  { name: "Wireless Headphones", sales: 342 },
                  { name: "Smart Ring", sales: 289 },
                  { name: "Portable SSD", sales: 267 },
                  { name: "Designer Backpack", sales: 198 },
                ].map((product, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm">{product.name}</span>
                    <span className="font-semibold">{product.sales} sales</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-lg">Recent Orders</h2>
              <Link href="/admin/orders">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold">Amount</th>
                    <th className="text-left py-3 px-4 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border hover:bg-secondary/30 transition">
                      <td className="py-3 px-4 font-medium">{order.id}</td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4 font-semibold text-accent">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                              : order.status === "shipped"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          }`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
