import React from 'react'
import PropTypes from 'prop-types'

import './Product.css'

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'
import Image from '@/components/Image/Image.jsx'
import SimilarProducts from './components/SimilarProducts.jsx'

import data from '@/utils/data/index.js'

const Product = ({ match }) => {
  const productRef = data.product.getRef(match.params.id)

  return (
    <>
      <Breadcrumb buildFrom={productRef} />

      <div className='product'>
        <div className='product__image-container'>
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
                  {productRef.desc.list.map((cur, index) => (
                    <div className='product__desc-list-item' key={index}>
                      {cur}
                    </div>
                  ))}
                </div>
              )}

              {productRef.desc.table && (
                <table className='product__desc-table'>
                  <tbody>
                    {productRef.desc.table.map((cur, index) => (
                      <tr className='product__desc-table-row' key={index}>
                        <td className='product__desc-table-key'>{cur.key}</td>
                        <td className='product__desc-table-value'>
                          {cur.value}
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

      <SimilarProducts category={productRef.category} exclude={productRef.id} />
    </>
  )
}

Product.propTypes = {
  match: PropTypes.object
}

export default Product
