import { ReactElement } from 'react'

import { Link } from 'react-router-dom'

import { category, ProductType, CategoryType } from '@/utils/data'
import './Breadcrumb.css'

const buildBreadcrumb = (
  buildFrom: ProductType | CategoryType
): Array<{
  name: string
  to?: string
}> => {
  const getUrl = (catId: string): string => {
    const parent = category.getKey(catId, 'parent')

    return parent !== undefined
      ? `${getUrl(parent)}/${catId}`
      : `/products/${catId}`
  }

  const steps = []

  steps.unshift({
    name: buildFrom.name
  })

  const buildSteps = (catId: string): void => {
    steps.unshift({
      to: getUrl(catId),
      name: category.getKey(catId, 'name')
    })

    const parent = category.getKey(catId, 'parent')
    if (parent !== undefined) buildSteps(parent)
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
    name: 'Ana Sayfa'
  })

  return steps
}

interface BreadcrumbProps {
  buildFrom: ProductType | CategoryType
}

const Breadcrumb = ({ buildFrom }: BreadcrumbProps): ReactElement => (
  <div className="breadcrumb">
    {buildBreadcrumb(buildFrom).map((cur) => (
      <div
        key={cur.name + (cur.to !== undefined ? cur.to : '')}
        className="breadcrumb__step"
      >
        {cur.to !== undefined ? (
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
