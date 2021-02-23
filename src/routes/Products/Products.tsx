import { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './Products.css'

import { category, product, CategoryType, ProductType } from '@/utils/data'

import ProductList from '@/components/ProductList/ProductList'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'

type ProductsProps = RouteComponentProps<{
  category: string
  subcategory: string
  lowermostcategory: string
}>

const Products = ({ match }: ProductsProps): ReactElement | null => {
  const currentCategory = category.getRef(
    match.params.lowermostcategory ??
      match.params.subcategory ??
      match.params.category
  )

  if (currentCategory === undefined) {
    return null
  }

  const allSubs = category
    .getAllSubs(currentCategory.id)
    .map((cur: CategoryType) => cur.id)

  allSubs.unshift(currentCategory.id)

  return (
    <>
      <Breadcrumb buildFrom={currentCategory} />

      <div className="products-title">{currentCategory.name}</div>

      <ProductList
        items={product.filter((e: ProductType) => allSubs.includes(e.category))}
      />
    </>
  )
}

export default Products
