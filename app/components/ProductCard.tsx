import React from 'react'
import AddToCart from './AddToCart'
// import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className='p-5 my-auto text-xl hover:border-4 rounded-lg border-slate'>
      <div>ProductCard</div>
      <AddToCart/>
    </div>
  )
}

export default ProductCard
