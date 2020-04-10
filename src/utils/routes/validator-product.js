import data from '@/utils/data/index.js'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {Object} path - Path to be validated
 * @param {string} path.id
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorProduct)(Products)} />
 **/
const validatorProduct = ({ id }) => {
	// /products/:id
	return data.product.getRef(id)
}

export default validatorProduct
