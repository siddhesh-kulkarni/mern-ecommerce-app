import React from 'react'

const AddDiscount = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Add Discount</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <form className="p-6 space-y-4">
          <input className="w-full px-4 py-2.5 border rounded-lg" placeholder="Discount Name" />
          <select className="w-full px-4 py-2.5 border rounded-lg">
            <option>Percentage</option>
            <option>Flat</option>
          </select>
          <input className="w-full px-4 py-2.5 border rounded-lg" placeholder="Value" />
          <select className="w-full px-4 py-2.5 border rounded-lg">
            <option>Select Category</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Footwear</option>
          </select>
          <select className="w-full px-4 py-2.5 border rounded-lg">
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="flex gap-3 pt-4">
            <button onClick={onClose} type="button" className="flex-1 border rounded-lg py-2.5">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-primary text-white rounded-lg py-2.5">
              Add Discount
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDiscount
