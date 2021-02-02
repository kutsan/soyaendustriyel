import data from '@/utils/data/index'
import { RouteComponentProps } from 'react-router-dom'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @example <Route component={validatedRoute(validatorProduct)(Products)} />
 */
const validatorProduct = (
  props: RouteComponentProps<{ id: string }>
): boolean => Boolean(data.product.getRef(props.match.params.id))

export default validatorProduct
