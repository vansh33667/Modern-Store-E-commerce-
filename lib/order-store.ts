// In-memory order storage
let orders: any[] = []
let nextOrderId = 1000

export const orderStore = {
  createOrder(orderData: any) {
    const order = {
      id: `ORD-${nextOrderId++}`,
      ...orderData,
      createdAt: new Date().toISOString(),
      status: "processing" as const,
    }
    orders.push(order)
    return order
  },

  getOrders() {
    return orders
  },

  getOrderById(id: string) {
    return orders.find((o) => o.id === id)
  },

  updateOrderStatus(id: string, status: string) {
    const order = orders.find((o) => o.id === id)
    if (order) {
      order.status = status
      order.updatedAt = new Date().toISOString()
    }
    return order
  },

  deleteOrder(id: string) {
    orders = orders.filter((o) => o.id !== id)
  },

  clearOrders() {
    orders = []
  },
}
