import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import './ProductCard.css'
import { ProductType } from '@/utils/data'

import Image from '@/components/Image/Image'

const ProductCard = ({ product }: { product: ProductType }): ReactElement => (
  <Link className="product-card" to={`/product/${product.id}`}>
    <div className="product-card__image-container">
      <Image id={product.id} />
    </div>
    <div className="product-card__code">{product.code}</div>
    <div className="product-card__name">{product.name}</div>
  </Link>
)

export default ProductCard
