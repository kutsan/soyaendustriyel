import { RouteComponentProps } from 'react-router-dom'
import { category as dataCategory } from '@/utils/data'

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

  let valid = false

  if (category && !subcategory && !lowermostcategory) {
    const topRef = dataCategory.getRef(category)

    valid = topRef !== undefined && !topRef.parent
  } else if (category && subcategory && !lowermostcategory) {
    const subRef = dataCategory.getRef(subcategory)

    valid = subRef !== undefined && subRef.parent === category
  } else if (category && subcategory && lowermostcategory) {
    const subRef = dataCategory.getRef(subcategory)
    const lowermostRef = dataCategory.getRef(lowermostcategory)

    valid =
      subRef !== undefined &&
      lowermostRef !== undefined &&
      subRef.parent === category &&
      lowermostRef.parent === subcategory
  }

  return valid
}

export default validatorProducts
