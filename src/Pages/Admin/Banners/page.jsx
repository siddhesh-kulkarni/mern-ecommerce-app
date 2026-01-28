import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'
import BannerForm from './BannerForm'
import DeleteBanner from './DeleteBanner'

const Banners = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedBanner, setSelectedBanner] = useState(null)

  const [banners, setBanners] = useState([
    {
      id: 1,
      title: 'Summer Sale',
      position: 'Homepage Top',
      link: '/sale',
      status: 'active',
    },
    {
      id: 2,
      title: 'New Arrivals',
      position: 'Homepage Middle',
      link: '/new-arrivals',
      status: 'inactive',
    },
  ])

  const getStatusColor = (status) =>
    status === 'active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800'

  const handleDeleteBanner = (banner) => {
    console.log('Deleting banner:', banner)
    setBanners((prev) => prev.filter((b) => b.id !== banner.id))
    setShowDeleteModal(false)
    setSelectedBanner(null)
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Banners</h1>
            <p className="text-gray-600 mt-1">Manage website banners</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold shadow-md transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Banner
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search banners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary"
              />
              <svg className="w-5 h-5 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold uppercase">Title</th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase">Position</th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase">Link</th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-semibold uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {banners.map((banner) => (
                  <tr key={banner.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium">{banner.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{banner.position}</td>
                    <td className="px-6 py-4 text-sm text-blue-600">{banner.link}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(banner.status)}`}>
                        {banner.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {/* Edit */}
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg"
                          onClick={() => {
                            setSelectedBanner(banner)
                            setShowEditModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>

                        {/* Delete */}
                        <button
                          className="p-2 hover:bg-gray-100 rounded-lg"
                          onClick={() => {
                            setSelectedBanner(banner)
                            setShowDeleteModal(true)
                          }}
                        >
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <BannerForm
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        mode="add"
      />

      <BannerForm
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        banner={selectedBanner}
        mode="edit"
      />
      <DeleteBanner
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        banner={selectedBanner}
        onConfirm={handleDeleteBanner} />
    </AdminLayout>
  )
}

export default Banners
