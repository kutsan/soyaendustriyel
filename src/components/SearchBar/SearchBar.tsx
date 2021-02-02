import * as React from 'react'
import { ReactElement, ChangeEvent, KeyboardEvent } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './SearchBar.css'
import SearchIcon from '@/assets/icons/search.svg'

import { SearchResultType } from '@/types/index'
import data from '@/utils/data/index'
import SearchResultItem from './components/SearchResultItem'

const { useState, useRef } = React

type Props = {
  hidden?: boolean
}

const SearchBar = ({ hidden = false }: Props): ReactElement => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<SearchResultType[]>([])

  const searchEl = useRef<HTMLDivElement>(null)
  const inputEl = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    const query = event.target.value.trim()

    setActive(Boolean(query))

    if (query.trim()) {
      setResults(data.product.search(query))
    } else {
      setResults([])
    }
  }

  const handleFocus = () => {
    setActive(true)

    if (window.innerWidth < 769) {
      if (searchEl && searchEl.current) {
        searchEl.current.scrollIntoView()
      }
    }
  }

  const clearSearch = () => {
    setValue('')
    setActive(false)
    setResults([])

    if (inputEl && inputEl.current) {
      inputEl.current.blur()
    }
  }

  const handleBlur = () => {
    setActive(false)
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (results.length === 1) {
        history.push(`/product/${results[0].id}`)
      } else {
        history.push({ pathname: '/search', search: `?query=${value}` })
      }

      clearSearch()
    }
  }

  return (
    <div ref={searchEl} className={hidden ? 'search search--hidden' : 'search'}>
      <div
        className={`search-wrapper ${active ? 'search-wrapper--active' : ''}`}
      >
        <div className="search-bar">
          <input
            ref={inputEl}
            value={value}
            onKeyDown={handleKeyUp}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="search"
            className="search__input"
            placeholder="Ürün, kategori, marka veya ürün kodu ile ara..."
            aria-label="Search text"
          />
          {!value ? (
            <div className="search__button search__button--disabled">
              <SearchIcon className="search__button-icon" />
            </div>
          ) : (
            <Link
              to={{
                pathname: '/search',
                search: `?query=${value}`,
              }}
              onClick={clearSearch}
              className="search__button"
              aria-label="Search"
            >
              <SearchIcon className="search__button-icon" />
            </Link>
          )}
        </div>

        <div
          role="dialog"
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
export default SearchBar
