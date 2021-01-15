import React from 'react'
import PropTypes from 'prop-types'

import './ProductList.css'

import ProductCard from '@/components/ProductCard/ProductCard'

const ProductList = ({ items }) => {
  return (
    <div className='product-list'>
      {items.map((item) => (
        <div key={item.id} className='product-list__item'>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  )
}

ProductList.propTypes = {
  items: PropTypes.array
}

export default ProductList
