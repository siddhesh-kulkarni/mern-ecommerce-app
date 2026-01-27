import React from 'react'

const DeleteCategory = ({ isOpen, onClose, category, onConfirm }) => {
  if (!isOpen || !category) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Delete Category</h2>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-700 text-sm">
            Are you sure you want to delete{' '}
            <span className="font-semibold text-gray-900">
              '{category.name}'
            </span>
            ?
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-2.5 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(category)}
            className="flex-1 px-6 py-2.5 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCategory
