import React from 'react'

const AddBanner = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">Add Banner</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input className="w-full px-4 py-2.5 border rounded-lg" placeholder="Banner Title" />
          <input className="w-full px-4 py-2.5 border rounded-lg" placeholder="Redirect Link" />
          <select className="w-full px-4 py-2.5 border rounded-lg">
            <option>Homepage Top</option>
            <option>Homepage Middle</option>
            <option>Homepage Bottom</option>
          </select>
          <select className="w-full px-4 py-2.5 border rounded-lg">
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 border rounded-lg py-2.5">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-primary text-white rounded-lg py-2.5">
              Add Banner
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddBanner
