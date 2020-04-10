import React from 'react'

import './Home.css'

import ProductCard from '@/components/ProductCard/ProductCard.jsx'
// import Brands from '@/components/Brands/Brands.jsx'

import data from '@/utils/data/index.js'

const Home = () => {
	return (
		<>
			<div className='home-products'>
				{data.product.getRandom(8).map((cur) => {
					return <ProductCard key={cur.id} product={cur} />
				})}
			</div>

			{/* <Brands /> */}
		</>
	)
}

export default Home
