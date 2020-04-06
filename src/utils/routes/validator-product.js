import { products as dataProducts } from '@/data/products.json'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {object} path - Path to be validated.
 * @param {string} path.id
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorProduct)(Products)} />
 **/
const validatorProduct = ({ id }) => {
	// /products/:id
	return dataProducts.find((e) => {
		return e.id === id
	})
}

export default validatorProduct
