// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Products.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/ProductList/Produ... Remove this comment to see the full error message
import ProductList from '@/components/ProductList/ProductList.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Breadcrumb/Breadc... Remove this comment to see the full error message
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

type Props = {
    match?: any;
};

const Products = ({ match }: Props) => {
  const currentCategory = data.category.getRef(
    match.params.lowermostcategory ||
      match.params.subcategory ||
      match.params.category
  )

  const allSubs = data.category
    .getAllSubs(currentCategory.id)
    .map((cur: any) => cur.id)
  allSubs.unshift(currentCategory.id)

  return <>
    <Breadcrumb buildFrom={currentCategory} />

    <div className='products-title'>{currentCategory.name}</div>

    <ProductList
      items={data.product.filter((e: any) => allSubs.indexOf(e.category) > -1)}
    />
  </>;
}

export default Products
