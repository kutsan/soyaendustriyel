// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { Link } from 'react-router-dom'

import './SearchResultItem.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Image/Image.jsx'.... Remove this comment to see the full error message
import Image from '@/components/Image/Image.jsx'

type Props = {
    item?: any;
    query?: string;
    onClick?: (...args: any[]) => any;
};

const SearchResultItem = ({ item, onClick }: Props) => {
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

export default SearchResultItem
