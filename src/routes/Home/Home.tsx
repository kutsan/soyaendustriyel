import * as React from 'react'
import { ReactElement } from 'react'

import ProductList from '@/components/ProductList/ProductList'
// import Brands from '@/components/Brands/Brands'

import data from '@/utils/data/index'

const Home = (): ReactElement => (
  <>
    <ProductList items={data.product.getRandom(15)} />
    {/* <Brands /> */}
  </>
)

export default Home
