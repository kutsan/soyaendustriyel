// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'

import './Product.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Breadcrumb/Breadc... Remove this comment to see the full error message
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/components/Image/Image.jsx'.... Remove this comment to see the full error message
import Image from '@/components/Image/Image.jsx'
// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'
import SimilarProducts from './components/SimilarProducts.jsx'


type Props = {
    match?: any;
};

const Product = ({ match }: Props) => {
  const productRef = data.product.getRef(match.params.id)

  return <>
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
                {productRef.desc.list.map((cur: any, index: any) => (
                  <div className='product__desc-list-item' key={index}>
                    {cur}
                  </div>
                ))}
              </div>
            )}

            {productRef.desc.table && (
              <table className='product__desc-table'>
                <tbody>
                  {productRef.desc.table.map((cur: any, index: any) => (
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
  </>;
}

export default Product
