import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MostPopular = () => {
  const { t } = useTranslation()
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h3 className="text-xl font-semibold mb-4">{t('mostPopular')}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map(i => (
          <Link key={i} to={`/product/popular-${i}`} className="block bg-white rounded-md p-3 shadow-sm hover:shadow-md">
            <img src={`https://picsum.photos/seed/pop-${i}/300/200`} alt={`pop-${i}`} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-2 text-sm font-medium">Popular {i}</div>
            <div className="text-sm text-gray-600">$29.99</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MostPopular
