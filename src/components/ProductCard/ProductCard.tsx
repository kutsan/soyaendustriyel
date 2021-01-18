// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { Link } from 'react-router-dom'

import './ProductCard.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Image/Image.jsx'.... Remove this comment to see the full error message
import Image from '@/components/Image/Image.jsx'

type Props = {
    product?: any;
};

const ProductCard = ({ product }: Props) => (
    <Link className='product-card' to={`/product/${product.id}`}>
      <div className='product-card__image-container'>
        <Image id={product.id} />
      </div>
      <div className='product-card__code'>{product.code}</div>
      <div className='product-card__name'>{product.name}</div>
    </Link>
  )

export default ProductCard
