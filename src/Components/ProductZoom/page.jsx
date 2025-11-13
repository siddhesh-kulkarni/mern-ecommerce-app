import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css';

const DEFAULT_IMG = 'https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg'

const ProductZoom = ({ src, alt }) => {
    return (
        <div className="w-full">
            <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={src || DEFAULT_IMG}
                alt={alt || 'Product image'}
                className="rounded-md"
            />
        </div>
    )
}

export default ProductZoom
