import React, { useEffect, useState } from 'react'

const BannerForm = ({ isOpen, onClose, banner, mode = "add" }) => {
  const initialState = {
    title: '',
    link: '',
    position: 'Homepage Top',
    status: 'active',
  }

  const [formData, setFormData] = useState(initialState)

  useEffect(() => {
    if (mode === "edit" && banner) {
      setFormData({
        title: banner.title || '',
        link: banner.link || '',
        position: banner.position || 'Homepage Top',
        status: banner.status || 'active',
      })
    }

    if (mode === "add") {
      setFormData(initialState)
    }
  }, [banner, mode])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (mode === "add") {
      console.log("Creating Banner:", formData)
    } else {
      console.log("Updating Banner:", formData)
    }

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full">
        
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {mode === "add" ? "Add Banner" : "Edit Banner"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          {/* Banner Title */}
          <div>
            <label className="block text-sm font-semibold mb-2">Banner Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Summer Sale Banner"
              className="w-full px-4 py-2.5 border rounded-lg"
            />
          </div>

          {/* Redirect Link */}
          <div>
            <label className="block text-sm font-semibold mb-2">Redirect Link</label>
            <input
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="e.g. /sale or https://example.com/sale"
              className="w-full px-4 py-2.5 border rounded-lg"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-semibold mb-2">Banner Position</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded-lg"
            >
              <option>Homepage Top</option>
              <option>Homepage Middle</option>
              <option>Homepage Bottom</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border rounded-lg"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* Actions */}
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
              {mode === "add" ? "Add Banner" : "Update Banner"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BannerForm
