import React from 'react'
import { withRouter, useLocation } from 'react-router-dom'

import './Search.css'

import ProductList from '@/components/ProductList/ProductList.jsx'

import data from '@/utils/data/index.js'

const Search = () => {
	const params = new URLSearchParams(useLocation().search)
	const query = params.get('query') || ''

	return (
		<>
			<div className='search-title'>Hello from search: query: {query}</div>
			<ProductList items={data.product.search(query)} />
		</>
	)
}

export default withRouter(Search)
