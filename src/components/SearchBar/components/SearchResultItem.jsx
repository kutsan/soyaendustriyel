import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './SearchResultItem.css'

import Image from '@/components/Image/Image.jsx'

const SearchResultItem = ({ item, onClick }) => {
	const { attribute, index, value } = item.match

	const match = (
		<>
			<span>{item[attribute].substring(0, index)}</span>
			<span className='search-result-item__highlight'>{value}</span>
			<span>{item[attribute].substring(index + value.length)}</span>
		</>
	)

	return (
		<Link to={`/product/${item.id}`} onClick={onClick} className='search-result-item'>
			<div className='search-result-item__image-container'>
				<Image id={item.id} />
			</div>
			<div>
				<div className='search-result-item__name'>
					{attribute === 'name' ? match : item.name}
				</div>
				<div className='search-result-item__brand'>
					{attribute === 'brand' ? match : item.brand}
				</div>
				<div className='search-result-item__code'>
					{attribute === 'code' ? match : item.code}
				</div>
			</div>
		</Link>
	)
}

SearchResultItem.propTypes = {
	item: PropTypes.object,
	query: PropTypes.string,
	onClick: PropTypes.func
}

export default SearchResultItem
