"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"

export default function AdminOrdersPage() {
  const orders = [
    { id: "ORD-1001", customer: "John Doe", total: "$949.97", status: "delivered" },
    { id: "ORD-1002", customer: "Jane Smith", total: "$227.99", status: "shipped" },
    { id: "ORD-1003", customer: "Bob Wilson", total: "$3,699.98", status: "processing" },
    { id: "ORD-1004", customer: "Alice Brown", total: "$599.96", status: "delivered" },
    { id: "ORD-1005", customer: "Charlie Davis", total: "$1,299.99", status: "shipped" },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl">
          <div>
            <h1 className="text-4xl font-bold mb-2">Orders</h1>
            <p className="text-muted-foreground mb-8">Manage and track all customer orders</p>
          </div>

          <div className="rounded-lg border border-border bg-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-secondary/30">
                <tr>
                  <th className="text-left py-3 px-6 font-semibold">Order ID</th>
                  <th className="text-left py-3 px-6 font-semibold">Customer</th>
                  <th className="text-left py-3 px-6 font-semibold">Total</th>
                  <th className="text-left py-3 px-6 font-semibold">Status</th>
                  <th className="text-left py-3 px-6 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-secondary/20 transition">
                    <td className="py-4 px-6 font-medium">{order.id}</td>
                    <td className="py-4 px-6">{order.customer}</td>
                    <td className="py-4 px-6 font-semibold text-accent">{order.total}</td>
                    <td className="py-4 px-6">
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
                    <td className="py-4 px-6">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
