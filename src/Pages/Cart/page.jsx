import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoClose } from 'react-icons/io5'

const dummyCartItems = [
  { id: 1, name: 'Classic Cotton T-Shirt', price: 24.99, qty: 2, image: 'https://picsum.photos/seed/p1/100/100' },
  { id: 2, name: 'Denim Jeans', price: 49.99, qty: 1, image: 'https://picsum.photos/seed/p2/100/100' },
  { id: 3, name: 'Summer Dress', price: 34.99, qty: 1, image: 'https://picsum.photos/seed/p3/100/100' },
]

const Cart = ({ isOpen = true, onClose }) => {
  const { t } = useTranslation()
  const [items, setItems] = useState(dummyCartItems)

  const updateQty = (id, newQty) => {
    if (newQty <= 0) {
      setItems(items.filter(item => item.id !== id))
    } else {
      setItems(items.map(item => item.id === id ? { ...item, qty: newQty } : item))
    }
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + tax + shipping

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{t('shoppingCart')}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 text-sm">Your cart is empty</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                  <p className="text-xs text-gray-600">${item.price.toFixed(2)}</p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 bg-gray-100 rounded">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="px-2 py-1 text-xs hover:text-primary"
                      >
                        −
                      </button>
                      <span className="px-2 text-sm">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-2 py-1 text-xs hover:text-primary"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 text-xs font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="mt-auto border-t border-gray-200 p-6 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between text-base">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-primary">${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:opacity-95 shadow-sm transition mt-4 text-sm">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 transition text-sm"
              >
                Continue Shopping
              </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
