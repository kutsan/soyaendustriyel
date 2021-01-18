// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/ProductList/Produ... Remove this comment to see the full error message
import ProductList from '@/components/ProductList/ProductList.jsx'
// import Brands from '@/components/Brands/Brands.jsx'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

const Home = () => (
    <>
      <ProductList items={data.product.getRandom(80)} />

      {/* <Brands /> */}
    </>
  )

export default Home
