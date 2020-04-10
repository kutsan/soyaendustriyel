import React from 'react'
import PropTypes from 'prop-types'

import './Product.css'

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'
import Image from '@/components/Image/Image.jsx'

import data from '@/utils/data/index.js'

const Product = ({ match }) => {
	const productRef = data.product.getRef(match.params.id)

	return (
		<>
			<Breadcrumb buildFrom={productRef} />

			<div className='product'>
				<div className='product__picture-container'>
					<Image name={`${productRef.id}.jpg`} />
				</div>

				<div className='product__context'>
					<div className='product__title'>{productRef.name}</div>

					<div className='product__brand'>{productRef.brand}</div>

					<div className='product__code'>
						<span className='product__desc-key'>Ürün kodu: </span>
						<span className='product__desc-value'>{productRef.code}</span>
					</div>

					{productRef.desc && (
						<div className='product__desc'>
							{typeof productRef.desc === 'string' ? (
								<div className='product__desc-item'>
									<span className='product__desc-value'>{productRef.desc}</span>
								</div>
							) : (
								productRef.desc.map((e) => (
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
