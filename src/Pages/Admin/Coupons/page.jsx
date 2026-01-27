import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'
import AddCoupon from './AddCoupon'
import EditCoupon from './EditCoupon'
import DeleteCoupon from './DeleteCoupon'

const Coupons = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedCoupon, setSelectedCoupon] = useState(null)

  const coupons = [
    {
      id: 1,
      code: 'WELCOME10',
      description: 'Welcome discount for new customers',
      type: 'percentage',
      value: 10,
      minPurchase: 50,
      usageLimit: 1000,
      usageCount: 234,
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      status: 'active',
    },
    {
      id: 2,
      code: 'SUMMER25',
      description: 'Summer sale discount',
      type: 'percentage',
      value: 25,
      minPurchase: 100,
      usageLimit: 500,
      usageCount: 456,
      validFrom: '2024-06-01',
      validUntil: '2024-08-31',
      status: 'active',
    },
    {
      id: 3,
      code: 'FLAT50',
      description: '$50 off on orders above $200',
      type: 'fixed',
      value: 50,
      minPurchase: 200,
      usageLimit: 200,
      usageCount: 89,
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      status: 'active',
    },
    {
      id: 4,
      code: 'FREESHIP',
      description: 'Free shipping coupon',
      type: 'fixed',
      value: 10,
      minPurchase: 30,
      usageLimit: null,
      usageCount: 1234,
      validFrom: '2024-01-01',
      validUntil: '2024-12-31',
      status: 'active',
    },
    {
      id: 5,
      code: 'EXPIRED20',
      description: 'Expired coupon',
      type: 'percentage',
      value: 20,
      minPurchase: 75,
      usageLimit: 100,
      usageCount: 78,
      validFrom: '2024-01-01',
      validUntil: '2024-06-30',
      status: 'expired',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'expired':
        return 'bg-red-100 text-red-800'
      case 'disabled':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleDeleteCoupon = (coupon) => {
    console.log('Deleting coupon:', coupon)

    // Later: API call here
    // setCoupons(prev => prev.filter(c => c.id !== coupon.id))

    setShowDeleteModal(false)
    setSelectedCoupon(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
            <p className="text-gray-600 mt-1">Create and manage discount coupons</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-95 shadow-md transition flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Coupon
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search coupons by code or description..."
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
              <option>Active</option>
              <option>Expired</option>
              <option>Disabled</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Types</option>
              <option>Percentage</option>
              <option>Fixed Amount</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Code</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Discount</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Usage</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Valid Until</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {coupons.map((coupon) => (
                  <tr key={coupon.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded">
                        {coupon.code}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 max-w-xs truncate">{coupon.description}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 capitalize">{coupon.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {coupon.type === 'percentage' ? `${coupon.value}%` : `$${coupon.value}`}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {coupon.usageCount} / {coupon.usageLimit || '∞'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{coupon.validUntil}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(coupon.status)}`}>
                        {coupon.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          title="Edit"
                          onClick={() => {
                            setSelectedCoupon(coupon)
                            setShowEditModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          title="Delete"
                          onClick={() => {
                            setSelectedCoupon(coupon)
                            setShowDeleteModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">Showing 1 to 5 of 5 coupons</p>
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

      <AddCoupon isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
      <EditCoupon isOpen={showEditModal} onClose={() => setShowEditModal(false)} coupon={selectedCoupon} />
      <DeleteCoupon isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} coupon={selectedCoupon} onConfirm={handleDeleteCoupon} />
    </AdminLayout>
  )
}

export default Coupons
