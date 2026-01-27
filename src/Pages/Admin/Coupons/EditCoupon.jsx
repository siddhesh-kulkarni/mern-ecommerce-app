import React, { useEffect, useState } from 'react'

const EditCoupon = ({ isOpen, onClose, coupon }) => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (coupon) setFormData(coupon)
  }, [coupon])

  if (!isOpen) return null

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between">
          <h2 className="text-xl font-bold">Edit Coupon</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input name="code" value={formData.code || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg uppercase" />
          <input name="description" value={formData.description || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg" />

          <div className="grid grid-cols-2 gap-4">
            <select name="type" value={formData.type || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg">
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed</option>
            </select>
            <input name="value" value={formData.value || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg" />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 border rounded-lg py-2.5">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-primary text-white rounded-lg py-2.5">
              Update Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCoupon
