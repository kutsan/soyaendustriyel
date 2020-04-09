import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import storage from '@/utils/firebase/storage.js'

import './Product.css'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'

import { products } from '@/data/products.json'

const Product = ({ match }) => {
	const data = products.find((e) => e.id === match.params.id)

	const [img, setImg] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		let ignore = false

		setLoading(true)

		storage
			.child(`${data.id}.jpg`)
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
	}, [data.id])

	return (
		<>
			<Breadcrumb buildFrom={data} />

			<div className='product'>
				<div className='product__picture-container'>
					<div
						style={img && { backgroundImage: `url('${img}')` }}
						className={`product__picture ${
							loading ? 'product__picture--loading' : ''
						} ${!loading && !img ? 'product__picture--no-image' : ''}`}
					></div>
				</div>

				<div className='product__context'>
					<div className='product__title'>{data.name}</div>

					<div className='product__brand'>{data.brand}</div>

					<div className='product__code'>
						<span className='product__desc-key'>Ürün kodu: </span>
						<span className='product__desc-value'>{data.code}</span>
					</div>

					{data.desc && (
						<div className='product__desc'>
							{typeof data.desc === 'string' ? (
								<div className='product__desc-item'>
									<span className='product__desc-value'>{data.desc}</span>
								</div>
							) : (
								data.desc.map((e) => (
									<div key={e.key} className='product__desc-item'>
										{e.key && (
											<span className='product__desc-key'>{e.key}: </span>
										)}
										<span className='product__desc-value'>{e.value}</span>
									</div>
								))
							)}
						</div>
					)}
				</div>
			</div>
		</>
	)
}

Product.propTypes = {
	match: PropTypes.object
}

export default Product
