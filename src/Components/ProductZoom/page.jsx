import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/styles.min.css';

const ProductZoom = () => {
    return (
        <>
            <InnerImageZoom zoomType='hover' zoomScale={1} src={'https://demos.codezeel.com/prestashop/PRS21/PRS210502/51-medium_default/today-is-a-good-day-framed-poster.jpg'} />
        </>
    )
}

export default ProductZoom
