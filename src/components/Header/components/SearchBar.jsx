import React from 'react'

import './SearchBar.css'

const SearchBar = () => {
	return (
		<div className='search-group'>
			<input
				type='search'
				className='search-input'
				placeholder='Ürün, kategori, marka veya ürün kodu ile ara...'
			/>
			<button type='button' className='search-button'>
				ARA
			</button>
		</div>
	)
}

export default SearchBar
