import React, { useEffect, useState } from 'react'

const CouponForm = ({ isOpen, onClose, coupon, mode = "add" }) => {
  const initialState = {
    code: '',
    description: '',
    type: 'percentage',
    value: '',
    minPurchase: '',
    usageLimit: '',
    validFrom: '',
    validUntil: '',
    status: 'active',
  }

  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if (mode === "edit" && coupon) {
      setFormData({
        code: coupon.code || '',
        description: coupon.description || '',
        type: coupon.type || 'percentage',
        value: coupon.value || '',
        minPurchase: coupon.minPurchase || '',
        usageLimit: coupon.usageLimit || '',
        validFrom: coupon.validFrom || '',
        validUntil: coupon.validUntil || '',
        status: coupon.status || 'active',
      })
    }

    if (mode === "add") {
      setFormData(initialState)
    }
  }, [coupon, mode])

  if (!isOpen) return null

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (mode === "add") {
      console.log("Creating Coupon:", formData)
    } else {
      console.log("Updating Coupon:", formData)
    }

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between">
          <h2 className="text-xl font-bold">
            {mode === "add" ? "Add New Coupon" : "Edit Coupon"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Coupon Code</label>
            <input
              name="code"
              value={formData.code}
              onChange={handleChange}
              placeholder="e.g. WELCOME10"
              className="w-full px-4 py-2.5 border rounded-lg uppercase"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g. 10% off for new users"
              className="w-full px-4 py-2.5 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Discount Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-lg"
              >
                <option value="percentage">Percentage</option>
                <option value="fixed">Fixed Amount</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Discount Value</label>
              <input
                type="number"
                name="value"
                value={formData.value}
                onChange={handleChange}
                placeholder="e.g. 10 or 50"
                className="w-full px-4 py-2.5 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 border rounded-lg py-2.5">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-primary text-white rounded-lg py-2.5 font-semibold">
              {mode === "add" ? "Create Coupon" : "Update Coupon"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CouponForm
