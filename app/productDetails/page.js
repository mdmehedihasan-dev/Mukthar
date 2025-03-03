import React from 'react'
import ProductPage from '../components/Product'
import ProductDescription from '../components/ProductDescription'
import Reviews from '../components/Reviews'
import Questions from '../components/Questions'

const ProductDetails = () => {
  return (
    <div className="bg-[#f6f4ed]">
       <ProductPage/>
       <ProductDescription/>
       <Reviews/>
       <Questions/>
    </div>
  )
}

export default ProductDetails
