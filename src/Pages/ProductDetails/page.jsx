import React from 'react'
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductZoom from '../../Components/ProductZoom/page';

export const ProductDetails = () => {
    return (
        <section className='py-5 pb-0'>
            <div className='container'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color='inherit' to="/" className='link transition !text-{14px}'>Home</Link>
                    <Link underline="hover" color='inherit' to="/" className='link transition !text-{14px}'>Fashion</Link>
                </Breadcrumbs>
            </div>

            <div className='container flex gap-4'>
                <div className='productZoomContainer w-[30%]'>
                    <ProductZoom/>
                </div>
            </div>
        </section>
    )
}
