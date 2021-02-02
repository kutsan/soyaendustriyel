import * as React from 'react'
import { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './Products.css'

import { CategoryType, ProductType } from '@/types/index'

import ProductList from '@/components/ProductList/ProductList'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'

import data from '@/utils/data/index'

type ProductsProps = RouteComponentProps<{
  category: string
  subcategory: string
  lowermostcategory: string
}>

const Products = ({ match }: ProductsProps): ReactElement => {
  const currentCategory = data.category.getRef(
    match.params.lowermostcategory ||
      match.params.subcategory ||
      match.params.category
  )

  const allSubs = data.category
    .getAllSubs(currentCategory.id)
    .map((cur: CategoryType) => cur.id)

  allSubs.unshift(currentCategory.id)

  return (
    <>
      <Breadcrumb buildFrom={currentCategory} />

      <div className="products-title">{currentCategory.name}</div>

      <ProductList
        items={data.product.filter(
          (e: ProductType) => allSubs.indexOf(e.category) > -1
        )}
      />
    </>
  )
}

export default Products
