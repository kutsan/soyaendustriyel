import * as React from 'react'
import { ReactElement } from 'react'

import './SimilarProducts.css'

import ProductList from '@/components/ProductList/ProductList'

import data from '@/utils/data/index'

type SimilarProductsProps = {
  category: string
  exclude?: string
}

const SimilarProducts = ({
  category,
  exclude = '',
}: SimilarProductsProps): ReactElement | null => {
  const similars = data.product.getRandom(4, category, exclude)

  if (similars.length === 0) {
    return null
  }

  return (
    <div className="similar-products">
      <div className="similar-products__title">Benzer Ürünler</div>

      <ProductList items={similars} />
    </div>
  )
}

export default SimilarProducts
