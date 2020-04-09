import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

import SearchIcon from '@/assets/icons/search.svg'

const SearchBar = ({ hidden = false }) => {
	return (
		<div className={hidden ? 'search search--hidden' : 'search'}>
			<input
				type='search'
				className='search__input'
				placeholder='Ürün, kategori, marka veya ürün kodu ile ara...'
				aria-label='Search text'
			/>
			<button type='button' className='search__button' aria-label='Search'>
				<SearchIcon className='search__button-icon' />
			</button>
		</div>
	)
}

SearchBar.propTypes = {
	hidden: PropTypes.bool
}

export default SearchBar
