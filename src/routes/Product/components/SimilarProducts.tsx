import { ReactElement } from 'react'

import './SimilarProducts.css'

import { product, ProductType } from '@/utils/data'

import ProductList from '@/components/ProductList/ProductList'

type SimilarProductsProps = {
  product: ProductType
}

const SimilarProducts = ({
  product: productProp,
}: SimilarProductsProps): ReactElement | null => {
  const similars = product.getRandom(4, productProp.category, productProp.id)

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
