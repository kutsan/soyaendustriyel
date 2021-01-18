// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './ProductList.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/ProductCard/Produ... Remove this comment to see the full error message
import ProductCard from '@/components/ProductCard/ProductCard'

type Props = {
    items?: any[];
};

const ProductList = ({ items }: Props) => (
    <div className='product-list'>
      {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
      {items.map((item) => (
        <div key={item.id} className='product-list__item'>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  )

export default ProductList
