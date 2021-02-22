import {
  useState,
  useRef,
  ReactElement,
  ChangeEvent,
  KeyboardEvent
} from 'react'
import { Link, useHistory } from 'react-router-dom'

import './SearchBar.css'
import SearchIcon from '@/assets/icons/search.svg'

import { product, SearchResultType } from '@/utils/data'
import SearchResultItem from './components/SearchResultItem'

interface SearchBarProps {
  hidden?: boolean
}

const SearchBar = ({ hidden = false }: SearchBarProps): ReactElement => {
  const [value, setValue] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState<SearchResultType[]>([])

  const searchEl = useRef<HTMLDivElement>(null)
  const inputEl = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
    const query = event.target.value.trim()

    setActive(Boolean(query))

    if (query !== '') {
      setResults(product.search(query))
    } else {
      setResults([])
    }
  }

  const handleFocus = (): void => {
    setActive(true)

    if (window.innerWidth < 769) {
      if (searchEl.current !== null) {
        searchEl.current.scrollIntoView()
      }
    }
  }

  const clearSearch = (): void => {
    setValue('')
    setActive(false)
    setResults([])

    if (inputEl.current !== null) {
      inputEl.current.blur()
    }
  }

  const handleBlur = (): void => {
    setActive(false)
  }

  const handleKeyUp = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (results.length === 0) return

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
          {value === '' || results.length === 0 ? (
            <div className="search__button search__button--disabled">
              <SearchIcon className="search__button-icon" />
            </div>
          ) : (
            <Link
              to={{
                pathname: '/search',
                search: `?query=${value}`
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
            active && results.length > 0 ? 'search-context--active' : ''
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
