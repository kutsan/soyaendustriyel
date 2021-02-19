import { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './Product.css'

import { product } from '@/utils/data'

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Image from '@/components/Image/Image'
import SimilarProducts from './components/SimilarProducts'

const Product = ({
  match,
}: RouteComponentProps<{ id: string }>): ReactElement | null => {
  const productRef = product.getRef(match.params.id)

  if (productRef === undefined) {
    return null
  }

  return (
    <>
      <Breadcrumb buildFrom={productRef} />

      <div className="product">
        <div className="product__image-container">
          <Image id={productRef.id} />
        </div>

        <div className="product__context">
          <div className="product__title">{productRef.name}</div>

          <div className="product__brand">{productRef.brand}</div>

          <div className="product__code">
            <span className="product__code-key">Ürün kodu: </span>
            <span>{productRef.code}</span>
          </div>

          {productRef.desc && (
            <div className="product__desc">
              {productRef.desc.text && <div>{productRef.desc.text}</div>}

              {productRef.desc.list && (
                <div className="product__desc-list">
                  {productRef.desc.list.map((cur: string) => (
                    <div key={cur} className="product__desc-list-item">
                      {cur}
                    </div>
                  ))}
                </div>
              )}

              {productRef.desc.table && (
                <table className="product__desc-table">
                  <tbody>
                    {productRef.desc.table.map(
                      (cur: { key: string; value: string }) => (
                        <tr
                          key={cur.value + cur.key}
                          className="product__desc-table-row"
                        >
                          <td className="product__desc-table-key">{cur.key}</td>
                          <td className="product__desc-table-value">
                            {cur.value}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      </div>

      <SimilarProducts product={productRef} />
    </>
  )
}

export default Product
