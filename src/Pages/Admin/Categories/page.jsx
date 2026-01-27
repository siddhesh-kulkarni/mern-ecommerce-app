import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'
import EditCategory from './EditCategory'
import DeleteCategory from './DeleteCategory'
import AddCategory from './AddCategory'

const Categories = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [showAddModal, setShowAddModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const categories = [
        {
            id: 1,
            name: 'Fashion',
            slug: 'fashion',
            products: 120,
            status: 'active',
            image: 'https://picsum.photos/seed/c1/100/100',
        },
        {
            id: 2,
            name: 'Electronics',
            slug: 'electronics',
            products: 85,
            status: 'active',
            image: 'https://picsum.photos/seed/c2/100/100',
        },
        {
            id: 3,
            name: 'Footwear',
            slug: 'footwear',
            products: 42,
            status: 'active',
            image: 'https://picsum.photos/seed/c3/100/100',
        },
        {
            id: 4,
            name: 'Accessories',
            slug: 'accessories',
            products: 0,
            status: 'inactive',
            image: 'https://picsum.photos/seed/c4/100/100',
        },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800'
            case 'inactive':
                return 'bg-gray-100 text-gray-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    const handleDeleteCategory = (category) => {
        console.log('Deleting category:', category)
        setShowDeleteModal(false)
    }

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
                        <p className="text-gray-600 mt-1">Manage product categories</p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-95 shadow-md transition flex items-center gap-2 justify-center"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Category
                    </button>
                </div>

                {/* Table Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search categories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-3">
                                        <input type="checkbox" className="w-4 h-4 rounded" />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Category Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Slug
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Products
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200">
                                {categories.map((category) => (
                                    <tr key={category.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <input type="checkbox" className="w-4 h-4 rounded" />
                                        </td>

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {category.name}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {category.slug}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {category.products}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                                                    category.status
                                                )}`}
                                            >
                                                {category.status}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <div className="flex items-center gap-2">
                                                {/* Edit */}
                                                <button
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                                                    title="Edit"
                                                    onClick={() => {
                                                        setSelectedCategory(category)
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

                                                {/* Delete */}
                                                <button
                                                    className="p-2 hover:bg-gray-100 rounded-lg transition"
                                                    title="Delete"
                                                    onClick={() => {
                                                        setSelectedCategory(category)
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

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600">Showing 1 to 4 of 4 categories</p>
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium" disabled>
                                Previous
                            </button>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                                1
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <AddCategory
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
            />
            <EditCategory
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                category={selectedCategory}
            />
            <DeleteCategory
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                category={selectedCategory}
                onConfirm={handleDeleteCategory}
            />
        </AdminLayout>
    )
}

export default Categories
