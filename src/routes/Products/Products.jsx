import React from 'react'
import PropTypes from 'prop-types'

import './Products.css'

import ProductCard from '@/components/ProductCard/ProductCard.jsx'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

import data from '@/utils/data/index.js'

const Products = ({ match }) => {
	let currentCategory = data.category.getRef(
		match.params.lowermostcategory || match.params.subcategory || match.params.category
	)

	let allSubs = data.category.getAllSubs(currentCategory.id).map((e) => e.id)
	allSubs.unshift(currentCategory.id)

	return (
		<>
			<Breadcrumb buildFrom={currentCategory} />

			<div className='products-title'>{currentCategory.name}</div>

			<div className='products'>
				{data.product
					.filter((e) => allSubs.indexOf(e.category) > -1)
					.map((cur) => {
						return <ProductCard key={cur.id} product={cur} />
					})}
			</div>
		</>
	)
}

Products.propTypes = {
	match: PropTypes.object
}

export default Products
