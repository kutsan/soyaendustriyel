import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import storage from '@/utils/firebase/storage.js'

import './ProductCard.css'

const ProductCard = ({ product }) => {
	const [img, setImg] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		let ignore = false

		setLoading(true)

		storage
			.child(`${product.id}.jpg`)
			.getDownloadURL()
			.then((url) => {
				if (!ignore) {
					setLoading(false)
					setImg(url)
				}
			})
			.catch((err) => {
				if (!ignore) console.error(err)
			})

		return () => {
			ignore = true
		}
	}, [product.id])

	return (
		<Link className='product-card' to={`/product/${product.id}`}>
			<div className='product-card__picture-container'>
				<div
					style={img && { backgroundImage: `url(${img})` }}
					className={`product-card__picture ${
						loading ? 'product-card__picture--loading' : ''
					} ${!loading && !img ? 'product-card__picture--no-image' : ''}`}
				></div>
			</div>
			<div className='product-card__code'>{product.code}</div>
			<div className='product-card__name'>{product.name}</div>
		</Link>
	)
}

ProductCard.propTypes = {
	product: PropTypes.object
}

export default ProductCard
