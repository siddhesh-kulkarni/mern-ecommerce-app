import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ReviewForm = ({ onSubmit }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    text: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name.trim() && formData.email.trim() && formData.text.trim()) {
      onSubmit(formData)
      setFormData({ name: '', email: '', rating: 5, text: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 mt-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{t('leaveReview')}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder={t('yourName')}
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('yourEmail')}
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-900 mb-2">{t('rating')}</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value={5}>5 Stars - Excellent</option>
          <option value={4}>4 Stars - Good</option>
          <option value={3}>3 Stars - Average</option>
          <option value={2}>2 Stars - Poor</option>
          <option value={1}>1 Star - Very Poor</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-900 mb-2">{t('yourReview')}</label>
        <textarea
          name="text"
          placeholder={t('yourReview')}
          value={formData.text}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-95 shadow-md transition font-semibold"
      >
        {t('submitReview')}
      </button>
    </form>
  )
}

export default ReviewForm
