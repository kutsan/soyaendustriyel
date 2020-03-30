import React from 'react'

import './SearchBar.css'

import SearchIcon from './SearchIcon.svg'

const SearchBar = () => {
	return (
		<div className='search'>
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

export default SearchBar
