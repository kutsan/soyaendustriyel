// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './SimilarProducts.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/ProductList/Produ... Remove this comment to see the full error message
import ProductList from '@/components/ProductList/ProductList.jsx'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

type Props = {
    category: string;
    exclude?: string;
};

// @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'string'.
const SimilarProducts = ({ category, exclude = null }: Props) => {
  const similars = data.product.getRandom(4, category, exclude)

  if (similars.length === 0) {
    return null
  }

  return (
    <div className='similar-products'>
      <div className='similar-products__title'>Benzer Ürünler</div>

      <ProductList items={similars} />
    </div>
  )
}

export default SimilarProducts
