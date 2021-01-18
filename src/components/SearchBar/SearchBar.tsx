// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SearchBar.css';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/assets/icons/search.svg'. Di... Remove this comment to see the full error message
import SearchIcon from '@/assets/icons/search.svg';
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js';
import SearchResultItem from './components/SearchResultItem';

type Props = {
    hidden?: boolean;
};
const SearchBar = ({ hidden = false }: Props) => {
    const [value, setValue] = useState('');
    const [active, setActive] = useState(null);
    const [results, setResults] = useState([]);
    const searchEl = useRef(null);
    const inputEl = useRef(null);
    const history = useHistory();
    const handleChange = (e: any) => {
        setValue(e.target.value);
        const query = e.target.value.trim();
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'boolean' is not assignable to pa... Remove this comment to see the full error message
        setActive(Boolean(query));
        query.trim() ? setResults(data.product.search(query)) : setResults([]);
    };
    const handleFocus = () => {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'true' is not assignable to param... Remove this comment to see the full error message
        setActive(true);
        if (window.innerWidth < 769) {
            // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
            searchEl.current.scrollIntoView();
        }
    };
    const clearSearch = () => {
        setValue('');
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'false' is not assignable to para... Remove this comment to see the full error message
        setActive(false);
        setResults([]);
        // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
        inputEl.current.blur();
    };
    const handleBlur = () => {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'false' is not assignable to para... Remove this comment to see the full error message
        setActive(false);
    };
    const handleKeyUp = (e: any) => {
        if (e.key === 'Enter') {
            if (results.length === 1) {
                history.push(`/product/${(results[0] as any).id}`);
            }
            else {
                history.push({ pathname: '/search', search: `?query=${value}` });
            }
            clearSearch();
        }
    };
    return (<div ref={searchEl} className={hidden ? 'search search--hidden' : 'search'}>
      <div className={`search-wrapper ${active ? 'search-wrapper--active' : ''}`}>
        <div className='search-bar'>
          <input ref={inputEl} value={value} onKeyDown={handleKeyUp} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} type='search' className='search__input' placeholder='Ürün, kategori, marka veya ürün kodu ile ara...' aria-label='Search text'/>
          {!value ? (<div className='search__button search__button--disabled'>
              <SearchIcon className='search__button-icon'/>
            </div>) : (<Link to={{
        pathname: '/search',
        search: `?query=${value}`
    }} onClick={clearSearch} className='search__button' aria-label='Search'>
              <SearchIcon className='search__button-icon'/>
            </Link>)}
        </div>
        <div onMouseDown={(e) => e.preventDefault()} className={`search-context ${active && results.length ? 'search-context--active' : ''}`}>
          {results.map((cur) => (<SearchResultItem key={`result-${(cur as any).id}`} item={cur} onClick={clearSearch}/>))}
        </div>
      </div>
    </div>);
};
export default SearchBar;
