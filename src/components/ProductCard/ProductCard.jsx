import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ProductCard.css'

const ProductCard = ({ product }) => {
	return (
		<Link className='product-card' to={`/product/${product.id}`}>
			<div className='product-card__picture'></div>
			<div className='product-card__code'>{product.code}</div>
			<div className='product-card__name'>{product.name}</div>
		</Link>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object
}

export default ProductCard
