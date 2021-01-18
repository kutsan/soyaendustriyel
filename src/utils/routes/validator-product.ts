// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/utils/data/index.js'. Did yo... Remove this comment to see the full error message
import data from '@/utils/data/index.js'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {string} props.match.params.id - Product ID.
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorProduct)(Products)} />
 * */
const validatorProduct = (props: any) => 
  // /products/:id
   data.product.getRef(props.match.params.id)


export default validatorProduct
