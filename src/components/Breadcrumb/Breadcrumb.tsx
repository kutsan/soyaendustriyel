import { ReactElement } from 'react'

import { Link } from 'react-router-dom'
import { ProductType, CategoryType } from '@/types/index'

import data from '@/utils/data/index'
import './Breadcrumb.css'

const buildBreadcrumb = (buildFrom: ProductType | CategoryType) => {
  const getUrl = (catId: string): string => {
    const parent = data.category.getKey(catId, 'parent')

    return parent ? `${getUrl(parent)}/${catId}` : `/products/${catId}`
  }

  const steps = []

  steps.unshift({
    name: buildFrom.name,
  })

  const buildSteps = (catId: string): void => {
    steps.unshift({
      to: getUrl(catId),
      name: data.category.getKey(catId, 'name'),
    })

    const parent = data.category.getKey(catId, 'parent')
    if (parent) buildSteps(parent)
  }

  // Check if it's a ProductType.
  if ('category' in buildFrom) {
    buildSteps(buildFrom.category)
  } else if (buildFrom.parent !== undefined) {
    // Otherwise it's a CategoryType but only run buildSteps if it's not a
    // top-level category.
    buildSteps(buildFrom.parent)
  }

  steps.unshift({
    to: '/',
    name: 'Ana Sayfa',
  })

  return steps
}

type BreadcrumbProps = {
  buildFrom: ProductType | CategoryType
}

const Breadcrumb = ({ buildFrom }: BreadcrumbProps): ReactElement => (
  <div className="breadcrumb">
    {buildBreadcrumb(buildFrom).map((cur) => (
      <div key={cur.name + cur.to} className="breadcrumb__step">
        {cur.to ? (
          <Link className="breadcrumb__step-link" to={cur.to}>
            {cur.name}
          </Link>
        ) : (
          <span className="breadcrumb__step-current">{cur.name}</span>
        )}
      </div>
    ))}
  </div>
)

export default Breadcrumb
