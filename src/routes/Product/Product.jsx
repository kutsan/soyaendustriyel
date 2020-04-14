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
					<Image id={productRef.id} />
				</div>

				<div className='product__context'>
					<div className='product__title'>{productRef.name}</div>

					<div className='product__brand'>{productRef.brand}</div>

					<div className='product__code'>
						<span className='product__code-key'>Ürün kodu: </span>
						<span>{productRef.code}</span>
					</div>

					{productRef.desc && (
						<div className='product__desc'>
							{productRef.desc.text && <div>{productRef.desc.text}</div>}

							{productRef.desc.list && (
								<div className='product__desc-list'>
									{productRef.desc.list.map((e, index) => (
										<div className='product__desc-list-item' key={index}>
											{e}
										</div>
									))}
								</div>
							)}

							{productRef.desc.table && (
								<table className='product__desc-table'>
									<tbody>
										{productRef.desc.table.map((e, index) => (
											<tr className='product__desc-table-row' key={index}>
												<td className='product__desc-table-key'>{e.key}</td>
												<td className='product__desc-table-value'>
													{e.value}
												</td>
											</tr>
										))}
									</tbody>
								</table>
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
