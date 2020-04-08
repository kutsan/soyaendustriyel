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
		(e) => e.id === (match.params.subcategory || match.params.category)
	)

	return (
		<>
			<Breadcrumb buildFrom={category} />

			<div className='products-title'>{category.name}</div>

			<div className='products'>
				{products.map((cur) => {
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
