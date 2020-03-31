import React from 'react'
import PropTypes from 'prop-types'

// Components
import ProductCard from '../../components/ProductCard/ProductCard.jsx'

// Style
import './Products.css'

// Data
import { products } from './../../data/products.json'

const Products = ({ match }) => {
	return (
		<>
			<div className='products-header'>{match.url}</div>

			<div className='products-container'>
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
