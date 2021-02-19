import { ReactElement } from 'react'

import ProductList from '@/components/ProductList/ProductList'
// import Brands from '@/components/Brands/Brands'

import { product } from '@/utils/data'

const Home = (): ReactElement => (
  <>
    <ProductList items={product.getRandom(15)} />
    {/* <Brands /> */}
  </>
)

export default Home
