import React from 'react'

const AddCoupon = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-gray-900">Add New Coupon</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Coupon Code</label>
            <input className="w-full px-4 py-2.5 border rounded-lg uppercase" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <input className="w-full px-4 py-2.5 border rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Discount Type</label>
              <select className="w-full px-4 py-2.5 border rounded-lg">
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Discount Value</label>
              <input type="number" className="w-full px-4 py-2.5 border rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Minimum Purchase</label>
              <input type="number" className="w-full px-4 py-2.5 border rounded-lg" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Usage Limit</label>
              <input type="number" className="w-full px-4 py-2.5 border rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Valid From</label>
              <input type="date" className="w-full px-4 py-2.5 border rounded-lg" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Valid Until</label>
              <input type="date" className="w-full px-4 py-2.5 border rounded-lg" />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 border rounded-lg py-2.5 font-semibold">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-primary text-white rounded-lg py-2.5 font-semibold">
              Create Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCoupon
