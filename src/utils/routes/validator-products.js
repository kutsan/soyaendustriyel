import data from '@/utils/data/index.js'

/**
 * Validator function intended to be used alongside `validatedRoute()` function
 * and react-router's <Route /> component.  Checks whether or not given `path` is
 * valid URL to go.
 *
 * @param {Object} path - Path to be validated
 * @param {string} path.category
 * @param {string} path.subcategory
 * @param {string} path.lowermostcategory
 * @return {boolean} Return path validation state, whether true or false.
 * @example
 *     <Route component={validatedRoute(validatorProducts)(Products)} />
 **/
const validatorProducts = ({ category, subcategory, lowermostcategory }) => {
	if (category && !subcategory && !lowermostcategory) {
		const topRef = data.category.getRef(category)

		return topRef && !topRef.parent
	} else if (category && subcategory && !lowermostcategory) {
		const subRef = data.category.getRef(subcategory)

		return subRef && subRef.parent === category
	} else if (category && subcategory && lowermostcategory) {
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
