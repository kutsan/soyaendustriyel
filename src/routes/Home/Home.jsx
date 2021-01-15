import React from 'react'

import ProductList from '@/components/ProductList/ProductList.jsx'
// import Brands from '@/components/Brands/Brands.jsx'

import data from '@/utils/data/index.js'

const Home = () => {
  return (
    <>
      <ProductList items={data.product.getRandom(80)} />

      {/* <Brands /> */}
    </>
  )
}

export default Home
