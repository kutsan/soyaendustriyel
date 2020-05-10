import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'

import './SearchBar.css'

import SearchResultItem from './components/SearchResultItem'
import SearchIcon from '@/assets/icons/search.svg'

import data from '@/utils/data/index.js'

const SearchBar = ({ hidden = false }) => {
	const [value, setValue] = useState('')
	const [active, setActive] = useState(null)
	const [results, setResults] = useState([])

	const searchEl = useRef(null)
	const inputEl = useRef(null)

	const history = useHistory()

	const handleChange = (e) => {
		setValue(e.target.value)

		const query = e.target.value.trim()

		setActive(Boolean(query))

		query.trim() ? setResults(data.product.search(query)) : setResults([])
	}

	const handleFocus = () => {
		setActive(true)
		if (window.innerWidth < 769) {
			searchEl.current.scrollIntoView()
		}
	}

	const clearSearch = () => {
		setValue('')
		setActive(false)
		setResults([])
		inputEl.current.blur()
	}

	const handleBlur = () => {
		setActive(false)
	}

	const handleKeyUp = (e) => {
		if (e.key === 'Enter') {
			if (results.length === 1) {
				history.push(`/product/${results[0].id}`)
			} else {
				history.push({ pathname: '/search', search: `?query=${value}` })
			}
			clearSearch()
		}
	}

	return (
		<div
			ref={searchEl}
			className={hidden ? 'search search--hidden' : 'search'}
		>
			<div
				className={`search-wrapper ${
					active ? 'search-wrapper--active' : ''
				}`}
			>
				<div className='search-bar'>
					<input
						ref={inputEl}
						value={value}
						onKeyDown={handleKeyUp}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						type='search'
						className='search__input'
						placeholder='Ürün, kategori, marka veya ürün kodu ile ara...'
						aria-label='Search text'
					/>
					{!value ? (
						<div className='search__button search__button--disabled'>
							<SearchIcon className='search__button-icon' />
						</div>
					) : (
						<Link
							to={{
								pathname: '/search',
								search: `?query=${value}`
							}}
							onClick={clearSearch}
							className='search__button'
							aria-label='Search'
						>
							<SearchIcon className='search__button-icon' />
						</Link>
					)}
				</div>
				<div
					onMouseDown={(e) => e.preventDefault()}
					className={`search-context ${
						active && results.length ? 'search-context--active' : ''
					}`}
				>
					{results.map((cur) => (
						<SearchResultItem
							key={`result-${cur.id}`}
							item={cur}
							onClick={clearSearch}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

SearchBar.propTypes = {
	hidden: PropTypes.bool
}

export default SearchBar
