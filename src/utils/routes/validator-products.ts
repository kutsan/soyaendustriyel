// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {string} props.match.params.category
 * @param {string} props.match.params.subcategory
 * @param {string} props.match.params.lowermostcategory
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorProducts)(Products)} />
 * */
const validatorProducts = ({
  match: {
    params: { category, subcategory, lowermostcategory }
  }
}: any) => {
  if (category && !subcategory && !lowermostcategory) {
    const topRef = data.category.getRef(category)

    return topRef && !topRef.parent
  } if (category && subcategory && !lowermostcategory) {
    const subRef = data.category.getRef(subcategory)

    return subRef && subRef.parent === category
  } if (category && subcategory && lowermostcategory) {
    const subRef = data.category.getRef(subcategory)
    const lowermostRef = data.category.getRef(lowermostcategory)

    return (
      subRef &&
      lowermostRef &&
      subRef.parent === category &&
      lowermostRef.parent === subcategory
    )
  }
}

export default validatorProducts
