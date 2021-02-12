import { withRouter, useLocation } from 'react-router-dom'

import './Search.css'

import ProductList from '@/components/ProductList/ProductList'

import data from '@/utils/data/index'

const Search = () => {
  const params = new URLSearchParams(useLocation().search)
  const query = params.get('query') || ''

  return (
    <>
      <div className="search-title">{query}</div>
      <ProductList items={data.product.search(query)} />
    </>
  )
}

export default withRouter(Search)
