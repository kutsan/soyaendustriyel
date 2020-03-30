import React from 'react'
import PropTypes from 'prop-types'

import './SearchBar.css'

import SearchIcon from './SearchIcon.svg'

const SearchBar = ({ hidden = false }) => {
	return (
		<div className={hidden ? 'search search--hidden' : 'search'}>
			<input
				type='search'
				className='search__input'
				placeholder='Ürün, kategori, marka veya ürün kodu ile ara...'
			/>
			<button
				type='button'
				className='search__button'
				dangerouslySetInnerHTML={{ __html: SearchIcon }}
			></button>
		</div>
	)
}

SearchBar.propTypes = {
	hidden: PropTypes.bool
}

export default SearchBar
