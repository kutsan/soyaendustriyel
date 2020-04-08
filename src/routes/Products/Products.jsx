import React from 'react'
import PropTypes from 'prop-types'

// Components
import ProductCard from '@/components/ProductCard/ProductCard.jsx'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

// Style
import './Products.css'

// Data
import { products } from '@/data/products.json'
import { categories } from '@/data/categories.json'

const Products = ({ match }) => {
	let category = categories.find(
		(e) =>
			e.id ===
			(match.params.lowermostcategory || match.params.subcategory || match.params.category)
	)

	const getCategoriesUnder = (category) => categories.filter((e) => e.parent === category.id)
	let categoriesUnder = []
	categoriesUnder.push(...getCategoriesUnder(category))
	categoriesUnder.forEach((e) => categoriesUnder.push(...getCategoriesUnder(e)))
	categoriesUnder = categoriesUnder.map((e) => e.id)
	categoriesUnder.unshift(category.id)

	return (
		<>
			<Breadcrumb buildFrom={category} />

			<div className='products-title'>{category.name}</div>

			<div className='products'>
				{products
					.filter((e) => categoriesUnder.indexOf(e.category) > -1)
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
