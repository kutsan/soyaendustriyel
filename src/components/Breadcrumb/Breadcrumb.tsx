// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/Kutsan/Projects/soyaendustriyel/no... Remove this comment to see the full error message
import React from 'react'
import { Link } from 'react-router-dom'

import './Breadcrumb.css'

// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

type BreadcrumbProps = {
    buildFrom: any;
};

const Breadcrumb = ({ buildFrom }: BreadcrumbProps) => (
    <div className='breadcrumb'>
      {buildBreadcrumb(buildFrom).map((cur, index) => (
        <div key={index} className='breadcrumb__step'>
          {cur.to ? (
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | true' is not assignable to type 'st... Remove this comment to see the full error message
            <Link className='breadcrumb__step-link' to={cur.to}>
              {cur.name}
            </Link>
          ) : (
            <span className='breadcrumb__step-current'>{cur.name}</span>
          )}
        </div>
      ))}
    </div>
  )

export default Breadcrumb

const buildBreadcrumb = (buildFrom: any) => {
  // @ts-expect-error ts-migrate(7024) FIXME: Function implicitly has return type 'any' because ... Remove this comment to see the full error message
  const getURL = (catID: any) => {
    const parent = data.category.getKey(catID, 'parent')

    return parent ? `${getURL(parent)}/${catID}` : `/products/${catID}`
  }

  const steps = []

  steps.unshift({
    to: false,
    name: buildFrom.name
  })

  const buildSteps = (catID: any) => {
    if (!catID) return false

    steps.unshift({
      to: getURL(catID),
      name: data.category.getKey(catID, 'name')
    })

    const parent = data.category.getKey(catID, 'parent')
    parent && buildSteps(parent)
  }

  buildSteps(buildFrom.category || buildFrom.parent)

  steps.unshift({
    to: '/',
    name: 'Ana Sayfa'
  })

  return steps
}
