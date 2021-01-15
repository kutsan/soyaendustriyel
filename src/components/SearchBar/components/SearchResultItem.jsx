import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './SearchResultItem.css'

import Image from '@/components/Image/Image.jsx'

const SearchResultItem = ({ item, onClick }) => {
  const { attr, index, value } = item.match

  const match = (
    <>
      <span>{item[attr].substring(0, index)}</span>
      <span className='search-result-item__highlight'>{value}</span>
      <span>{item[attr].substring(index + value.length)}</span>
    </>
  )

  return (
    <Link
      to={`/product/${item.id}`}
      onClick={onClick}
      className='search-result-item'
    >
      <div className='search-result-item__image-container'>
        <Image id={item.id} />
      </div>
      <div>
        <div className='search-result-item__name'>
          {attr === 'name' ? match : item.name}
        </div>
        <div className='search-result-item__brand'>
          {attr === 'brand' ? match : item.brand}
        </div>
        <div className='search-result-item__code'>
          {attr === 'code' ? match : item.code}
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
