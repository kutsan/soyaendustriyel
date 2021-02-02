import data from '@/utils/data/index'
import { RouteComponentProps } from 'react-router-dom'

type ValidatorProductsProps = RouteComponentProps<{
  category: string
  subcategory: string
  lowermostcategory: string
}>

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @example <Route component={validatedRoute(validatorProducts)(Products)} />
 */
const validatorProducts = (props: ValidatorProductsProps): boolean => {
  const {
    match: {
      params: { category, subcategory, lowermostcategory },
    },
  } = props

  if (category && !subcategory && !lowermostcategory) {
    const topRef = data.category.getRef(category)

    return topRef && !topRef.parent
  }

  if (category && subcategory && !lowermostcategory) {
    const subRef = data.category.getRef(subcategory)

    return subRef && subRef.parent === category
  }

  if (category && subcategory && lowermostcategory) {
    const subRef = data.category.getRef(subcategory)
    const lowermostRef = data.category.getRef(lowermostcategory)

    return (
      subRef &&
      lowermostRef &&
      subRef.parent === category &&
      lowermostRef.parent === subcategory
    )
  }

  return false
}

export default validatorProducts
