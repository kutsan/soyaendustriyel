import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Breadcrumb.css'

import data from '@/utils/data/index.js'

const Breadcrumb = ({ buildFrom }) => {
  return (
    <div className='breadcrumb'>
      {buildBreadcrumb(buildFrom).map((cur, index) => (
        <div key={index} className='breadcrumb__step'>
          {cur.to ? (
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
}

Breadcrumb.propTypes = {
  buildFrom: PropTypes.object.isRequired
}

export default Breadcrumb

const buildBreadcrumb = (buildFrom) => {
  const getURL = (catID) => {
    const parent = data.category.getKey(catID, 'parent')

    return parent ? `${getURL(parent)}/${catID}` : `/products/${catID}`
  }

  const steps = []

  steps.unshift({
    to: false,
    name: buildFrom.name
  })

  const buildSteps = (catID) => {
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
