import { categories as dataCategories } from '@/data/categories.json'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {object} path - Path to be validated.
 * @param {string} path.category
 * @param {string} path.subcategory
 * @param {string} path.lowermostcategory
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorProducts)(Products)} />
 **/
const validatorProducts = ({ category, subcategory, lowermostcategory }) => {
	if (category && !subcategory && !lowermostcategory) {
		return dataCategories.find((e) => {
			return e.id === category && !e.parent
		})
			? true
			: false
	} else if (category && subcategory && !lowermostcategory) {
		return dataCategories.find((e) => {
			return e.id === subcategory && e.parent === category
		})
			? true
			: false
	} else if (category && subcategory && lowermostcategory) {
		return dataCategories.find((e) => e.id === subcategory && e.parent === category) &&
			dataCategories.find((e) => e.id === lowermostcategory && e.parent === subcategory)
			? true
			: false
	}
}

export default validatorProducts
