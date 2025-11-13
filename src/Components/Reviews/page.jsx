import React from 'react'
import { useTranslation } from 'react-i18next'

const dummyReviews = [
  { id: 1, name: 'Alice', rating: 5, text: 'Great quality and fit. Will buy again!' },
  { id: 2, name: 'Bob', rating: 4, text: 'Good value for money.' },
  { id: 3, name: 'Charlie', rating: 4, text: 'Comfortable, but color fades slightly.' },
]

const Stars = ({ count }) => (
  <div className="flex text-yellow-400">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className={`w-4 h-4 ${i <= count ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" /></svg>
    ))}
  </div>
)

const Reviews = () => {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{t('customerReviews')}</h3>
      <div className="space-y-4">
        {dummyReviews.map(r => (
          <div key={r.id} className="border-b pb-3">
            <div className="flex items-center justify-between">
              <div className="font-medium">{r.name}</div>
              <Stars count={r.rating} />
            </div>
            <div className="text-sm text-gray-700 mt-2">{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
