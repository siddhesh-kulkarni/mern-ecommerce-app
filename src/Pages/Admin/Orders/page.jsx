import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOrder, setSelectedOrder] = useState(null)

  const orders = [
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8901',
      amount: 124.99,
      status: 'completed',
      payment: 'paid',
      date: '2024-12-02',
      items: [
        { name: 'Classic T-Shirt', qty: 2, price: 24.99 },
        { name: 'Denim Jeans', qty: 1, price: 49.99 },
      ],
      shipping: {
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8902',
      amount: 89.50,
      status: 'processing',
      payment: 'paid',
      date: '2024-12-02',
      items: [
        { name: 'Summer Dress', qty: 1, price: 34.99 },
      ],
      shipping: {
        address: '456 Oak Ave',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001',
      },
    },
    {
      id: 'ORD-003',
      customer: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '+1 234-567-8903',
      amount: 234.00,
      status: 'pending',
      payment: 'unpaid',
      date: '2024-12-01',
      items: [
        { name: 'Leather Jacket', qty: 1, price: 199.99 },
      ],
      shipping: {
        address: '789 Pine Rd',
        city: 'Chicago',
        state: 'IL',
        zip: '60601',
      },
    },
    {
      id: 'ORD-004',
      customer: 'Alice Brown',
      email: 'alice@example.com',
      phone: '+1 234-567-8904',
      amount: 156.75,
      status: 'completed',
      payment: 'paid',
      date: '2024-12-01',
      items: [
        { name: 'Running Shoes', qty: 1, price: 89.99 },
      ],
      shipping: {
        address: '321 Elm St',
        city: 'Houston',
        state: 'TX',
        zip: '77001',
      },
    },
    {
      id: 'ORD-005',
      customer: 'Charlie Wilson',
      email: 'charlie@example.com',
      phone: '+1 234-567-8905',
      amount: 99.99,
      status: 'shipped',
      payment: 'paid',
      date: '2024-12-01',
      items: [
        { name: 'Winter Coat', qty: 1, price: 99.99 },
      ],
      shipping: {
        address: '654 Maple Dr',
        city: 'Phoenix',
        state: 'AZ',
        zip: '85001',
      },
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPaymentColor = (payment) => {
    switch (payment) {
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'unpaid':
        return 'bg-red-100 text-red-800'
      case 'refunded':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
            <p className="text-gray-600 mt-1">Manage and track all customer orders</p>
          </div>
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-95 shadow-md transition flex items-center gap-2 justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export Orders
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search orders by ID, customer name, or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Status</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Payment</option>
              <option>Paid</option>
              <option>Unpaid</option>
              <option>Refunded</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{order.customer}</p>
                        <p className="text-xs text-gray-600">{order.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">${order.amount.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPaymentColor(order.payment)}`}>
                        {order.payment}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-primary hover:underline font-medium"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">Showing 1 to 5 of 5 orders</p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Order Details</h2>
                <p className="text-sm text-gray-600 mt-1">{selectedOrder.id}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Customer Information</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-900 font-medium">{selectedOrder.customer}</p>
                    <p className="text-gray-600">{selectedOrder.email}</p>
                    <p className="text-gray-600">{selectedOrder.phone}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Shipping Address</h3>
                  <div className="text-sm text-gray-600">
                    <p>{selectedOrder.shipping.address}</p>
                    <p>{selectedOrder.shipping.city}, {selectedOrder.shipping.state} {selectedOrder.shipping.zip}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Order Items</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Product</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Quantity</th>
                        <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700">Price</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {selectedOrder.items.map((item, i) => (
                        <tr key={i}>
                          <td className="px-4 py-3 text-sm text-gray-900">{item.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{item.qty}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">${item.price.toFixed(2)}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 text-right font-medium">${(item.qty * item.price).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm font-medium text-gray-900">${selectedOrder.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Shipping</span>
                  <span className="text-sm font-medium text-gray-900">$0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Tax</span>
                  <span className="text-sm font-medium text-gray-900">$0.00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-base font-semibold text-gray-900">Total</span>
                  <span className="text-base font-bold text-gray-900">${selectedOrder.amount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-6 py-2.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition">
                  Print Invoice
                </button>
                <button className="flex-1 px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:opacity-95 transition">
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}

export default Orders
