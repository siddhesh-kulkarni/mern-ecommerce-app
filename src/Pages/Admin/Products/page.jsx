import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'
import ProductForm from './ProductForm'
import DeleteProduct from './DeleteProduct'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Classic Cotton T-Shirt',
      sku: 'TSH-001',
      price: 24.99,
      stock: 150,
      category: 'Fashion',
      status: 'active',
      image: 'https://picsum.photos/seed/p1/100/100',
    },
    {
      id: 2,
      name: 'Denim Jeans',
      sku: 'JNS-002',
      price: 49.99,
      stock: 85,
      category: 'Fashion',
      status: 'active',
      image: 'https://picsum.photos/seed/p2/100/100',
    },
    {
      id: 3,
      name: 'Summer Dress',
      sku: 'DRS-003',
      price: 34.99,
      stock: 0,
      category: 'Fashion',
      status: 'out_of_stock',
      image: 'https://picsum.photos/seed/p3/100/100',
    },
    {
      id: 4,
      name: 'Leather Jacket',
      sku: 'JCK-004',
      price: 199.99,
      stock: 25,
      category: 'Fashion',
      status: 'active',
      image: 'https://picsum.photos/seed/p4/100/100',
    },
    {
      id: 5,
      name: 'Running Shoes',
      sku: 'SHO-005',
      price: 89.99,
      stock: 120,
      category: 'Footwear',
      status: 'active',
      image: 'https://picsum.photos/seed/p5/100/100',
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'out_of_stock':
        return 'bg-red-100 text-red-800'
      case 'draft':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleDeleteProduct = (product) => {
    console.log('Deleting product:', product)
    setShowDeleteModal(false)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            <p className="text-gray-600 mt-1">Manage your product inventory</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-95 shadow-md transition flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Categories</option>
              <option>Fashion</option>
              <option>Electronics</option>
              <option>Footwear</option>
            </select>
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>All Status</option>
              <option>Active</option>
              <option>Out of Stock</option>
              <option>Draft</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-4 h-4 rounded" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{product.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.sku}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">${product.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                        {product.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          title="Edit"
                          onClick={() => {
                            setSelectedProduct(product)
                            setShowEditModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg transition"
                          title="Delete"
                          onClick={() => {
                            setSelectedProduct(product)
                            setShowDeleteModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">Showing 1 to 5 of 5 products</p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductForm
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        mode="add"
      />

      <ProductForm
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        product={selectedProduct}
        mode="edit"
      />
      <DeleteProduct
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        product={selectedProduct}
        onConfirm={handleDeleteProduct}
      />
    </AdminLayout>
  )
}

export default Products
