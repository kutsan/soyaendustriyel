import React from 'react'
import PropTypes from 'prop-types'

import './SimilarProducts.css'

import ProductCard from '@/components/ProductCard/ProductCard.jsx'

import data from '@/utils/data/index.js'

const SimilarProducts = ({ category, exclude = null }) => {
	const similars = data.product.getRandom(4, category, exclude)

	if (similars.length === 0) {
		return null
	}

	return (
		<div className='similar-products'>
			<div className='similar-products__title'>Benzer Ürünler</div>

			<div className='similar-products__container'>
				{similars.map((e, index) => (
					<ProductCard key={index} product={e} />
				))}
			</div>
		</div>
	)
}

SimilarProducts.propTypes = {
	category: PropTypes.string.isRequired,
	exclude: PropTypes.string
}

export default SimilarProducts
