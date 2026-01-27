import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'
import AddDiscount from './AddDiscount'
import EditDiscount from './EditDiscount'
import DeleteDiscount from './DeleteDiscount'

const Discounts = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedDiscount, setSelectedDiscount] = useState(null)

  const discounts = [
    {
      id: 1,
      name: 'Summer Sale',
      category: 'Fashion',
      type: 'percentage',
      value: 20,
      status: 'active',
    },
    {
      id: 2,
      name: 'Footwear Offer',
      category: 'Footwear',
      type: 'flat',
      value: 500,
      status: 'inactive',
    },
  ]

  const getStatusColor = (status) =>
    status === 'active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800'

  const handleDeleteDiscount = (discount) => {
    console.log('Deleting discount:', discount)
    setShowDeleteModal(false)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Discounts</h1>
            <p className="text-gray-600 mt-1">Manage category based discounts</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Discount
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Discount Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Value</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {discounts.map((discount) => (
                  <tr key={discount.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {discount.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {discount.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 capitalize">
                      {discount.type}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {discount.type === 'percentage'
                        ? `${discount.value}%`
                        : `₹${discount.value}`}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(discount.status)}`}>
                        {discount.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        {/* SAME EDIT ICON */}
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          onClick={() => {
                            setSelectedDiscount(discount)
                            setShowEditModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>

                        {/* SAME DELETE ICON */}
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          onClick={() => {
                            setSelectedDiscount(discount)
                            setShowDeleteModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddDiscount isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
      <EditDiscount isOpen={showEditModal} onClose={() => setShowEditModal(false)} discount={selectedDiscount} />
      <DeleteDiscount isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)} discount={selectedDiscount} onConfirm={handleDeleteDiscount} />
    </AdminLayout>
  )
}

export default Discounts
