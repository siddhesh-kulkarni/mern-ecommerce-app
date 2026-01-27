import React, { useEffect, useState } from 'react'

const EditBanner = ({ isOpen, onClose, banner }) => {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (banner) setFormData(banner)
  }, [banner])

  if (!isOpen) return null

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full">
        <div className="p-6 border-b flex justify-between">
          <h2 className="text-xl font-bold">Edit Banner</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input name="title" value={formData.title || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg" />
          <input name="link" value={formData.link || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg" />
          <select name="position" value={formData.position || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg">
            <option>Homepage Top</option>
            <option>Homepage Middle</option>
            <option>Homepage Bottom</option>
          </select>
          <select name="status" value={formData.status || ''} onChange={handleChange} className="w-full px-4 py-2.5 border rounded-lg">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 border rounded-lg py-2.5">
              Cancel
            </button>
            <button type="submit" className="flex-1 bg-primary text-white rounded-lg py-2.5">
              Update Banner
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBanner
