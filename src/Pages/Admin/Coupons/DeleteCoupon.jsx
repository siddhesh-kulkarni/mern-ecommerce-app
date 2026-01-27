import React from 'react'

const DeleteCoupon = ({ isOpen, onClose, coupon, onConfirm }) => {
  if (!isOpen || !coupon) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Delete Coupon</h2>
        </div>

        <div className="p-6">
          <p>
            Are you sure you want to delete{' '}
            <strong>'{coupon.code}'</strong>?
          </p>
          <p className="text-xs text-gray-500 mt-2">This action cannot be undone.</p>
        </div>

        <div className="flex gap-3 px-6 pb-6">
          <button onClick={onClose} className="flex-1 border rounded-lg py-2.5">
            Cancel
          </button>
          <button onClick={() => onConfirm(coupon)} className="flex-1 bg-red-600 text-white rounded-lg py-2.5">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCoupon
