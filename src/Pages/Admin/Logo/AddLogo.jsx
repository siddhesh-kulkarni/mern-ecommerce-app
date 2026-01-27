import React from 'react'

const AddLogo = ({ isOpen, onClose, onAdd }) => {
  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()

    // mock upload
    const newLogo = {
      id: Date.now(),
      name: 'Company Logo',
      image: 'https://via.placeholder.com/150x60?text=LOGO',
      status: 'active',
    }

    onAdd(newLogo)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b flex justify-between">
          <h2 className="text-xl font-bold">Add Logo</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Upload Logo
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2.5 border rounded-lg"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border rounded-lg py-2.5 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary text-white rounded-lg py-2.5 font-semibold"
            >
              Upload Logo
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddLogo
