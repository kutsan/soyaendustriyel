import React from 'react'
import PropTypes from 'prop-types'

import './Products.css'

import ProductList from '@/components/ProductList/ProductList.jsx'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

import data from '@/utils/data/index.js'

const Products = ({ match }) => {
	let currentCategory = data.category.getRef(
		match.params.lowermostcategory || match.params.subcategory || match.params.category
	)

	let allSubs = data.category.getAllSubs(currentCategory.id).map((cur) => cur.id)
	allSubs.unshift(currentCategory.id)

	return (
		<>
			<Breadcrumb buildFrom={currentCategory} />

			<div className='products-title'>{currentCategory.name}</div>

			<ProductList items={data.product.filter((e) => allSubs.indexOf(e.category) > -1)} />
		</>
	)
}

Products.propTypes = {
	match: PropTypes.object
}

export default Products
