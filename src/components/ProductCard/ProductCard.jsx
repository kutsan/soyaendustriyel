import React from 'react'
import PropTypes from 'prop-types'

import './ProductCard.css'

const ProductCard = ({ product }) => {
	return (
		<div className='product-card'>
			<div className='product-card__img'>
				<img
					src='https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03411314/03411314-e11b16.jpg'
					alt='Coffe Mate 500g'
				/>
			</div>
			<div className='product-card__code'>{product.code}</div>
			<div className='product-card__name'>{product.name}</div>
		</div>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object
}

export default ProductCard
