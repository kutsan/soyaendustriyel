import React from 'react'
import { withRouter, useLocation } from 'react-router-dom'

import './Search.css'

import ProductCard from '@/components/ProductCard/ProductCard.jsx'

import data from '@/utils/data/index.js'

const Search = () => {
	const params = new URLSearchParams(useLocation().search)
	const query = params.get('query') || ''

	return (
		<>
			<div className='search-title'>Hello from search: query: {query}</div>

			<div className='products'>
				{data.product.search(query).map((cur) => {
					return <ProductCard key={cur.id} product={cur} />
				})}
			</div>
		</>
	)
}

export default withRouter(Search)
