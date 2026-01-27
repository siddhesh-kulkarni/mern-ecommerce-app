import React, { useState } from 'react'
import AdminLayout from '../../../Components/Admin/AdminLayout/page'
import AddLogo from './AddLogo'
import DeleteLogo from './DeleteLogo'

const Logo = () => {
    const [showAddModal, setShowAddModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedLogo, setSelectedLogo] = useState(null)

    // Only ONE logo allowed
    const [logos, setLogos] = useState([
        {
            id: 1,
            name: 'Company Logo',
            image: 'https://via.placeholder.com/300x100?text=LOGO',
            status: 'active',
        },
    ])
    // 👉 set [] to test empty state

    const handleDeleteLogo = (logo) => {
        console.log('Deleting logo:', logo)
        setLogos([])
        setSelectedLogo(null)
        setShowDeleteModal(false)
    }

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Logo</h1>
                        <p className="text-gray-600 mt-1">Manage website logo</p>
                    </div>

                    {/* Add Logo – only when no logo exists */}
                    {logos.length === 0 && (
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-95 shadow-md transition flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            Add Logo
                        </button>
                    )}
                </div>

                {/* Card Area */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    {logos.length === 0 ? (
                        <p className="text-sm text-gray-500 text-center py-12">
                            No logo uploaded yet.
                        </p>
                    ) : (
                        <div className="w-full max-w-xl">
                            {logos.map((logo) => (
                                <div key={logo.id} className="relative border border-gray-200 rounded-xl p-10 h-64 flex items-center justify-center bg-gray-50">
                                    {/* Delete Icon – top right */}
                                    <button
                                        className="absolute top-3 right-3 p-2 hover:bg-red-50 rounded-lg transition"
                                        onClick={() => {
                                            setSelectedLogo(logo)
                                            setShowDeleteModal(true)
                                        }}
                                        title="Delete Logo"
                                    >
                                        <svg
                                            className="w-5 h-5 text-red-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>

                                    {/* Logo Image */}
                                    <img
                                        src="/images/logo.jpg"
                                        alt="Website Logo"
                                        className="max-h-24 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Modals */}
            <AddLogo
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onAdd={(newLogo) => setLogos([newLogo])}
            />

            <DeleteLogo
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                logo={selectedLogo}
                onConfirm={handleDeleteLogo}
            />
        </AdminLayout>
    )
}

export default Logo