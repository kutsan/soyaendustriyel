import { ReactElement } from 'react'

import './SimilarProducts.css'

import ProductList from '@/components/ProductList/ProductList'
import { ProductType } from '@/types/index'

import data from '@/utils/data/index'

type SimilarProductsProps = {
  product: ProductType
}

const SimilarProducts = ({
  product,
}: SimilarProductsProps): ReactElement | null => {
  const similars = data.product.getRandom(4, product.category, product.id)

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
