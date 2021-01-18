// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { withRouter, useLocation } from 'react-router-dom'

import './Search.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/ProductList/Produ... Remove this comment to see the full error message
import ProductList from '@/components/ProductList/ProductList.jsx'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

const Search = () => {
  const params = new URLSearchParams(useLocation().search)
  const query = params.get('query') || ''

  return (
    <>
      <div className='search-title'>Hello from search: query: {query}</div>
      <ProductList items={data.product.search(query)} />
    </>
  )
}

export default withRouter(Search)
