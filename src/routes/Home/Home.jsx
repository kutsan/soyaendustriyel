import React from 'react'

import ProductCard from '@/components/ProductCard/ProductCard.jsx'
import Brands from '@/components/Brands/Brands.jsx'

import { products } from '@/data/products.json'

const Home = () => {
	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[a[i], a[j]] = [a[j], a[i]]
		}

		return a
	}

	return (
		<>
			<div className='products'>
				{shuffle(products)
					.slice(0, 8)
					.map((cur) => {
						return <ProductCard key={cur.id} product={cur} />
					})}
			</div>

			<Brands />
		</>
	)
}

export default Home
