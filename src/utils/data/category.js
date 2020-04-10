import { category as dataCategory } from '@/data/category.json'

/**
 * Gets category reference with ID.
 *
 * @param {string} id - Category ID
 * @return {Object} Direct category reference.
 **/
const getRef = (id) => {
	return dataCategory.find((e) => e.id === id)
}

/**
 * Gets given category key with ID.
 *
 * @param {string} id - Category ID
 * @return {Object} Given key value
 **/
const getKey = (id, key) => {
	const ref = getRef(id)

	return ref ? ref[key] : null
}

/**
 * Gets topmost categories.
 *
 * @return {Object[]} Array of categories
 **/
const getTops = () => {
	return dataCategory.filter((e) => !e.parent)
}

/**
 * Gets sub categories of given category id.
 *
 * @param {string} id - Category ID
 * @return {Object[]} Array of categories
 **/
const getSubs = (id) => {
	return dataCategory.filter((e) => e.parent === id)
}

/**
 * Checks whether or not given category has categories under.
 *
 * @param {string} id - Category ID
 * @return {boolean} True if given category has sub categories, false otherwise.
 **/
const hasSubs = (id) => {
	return Boolean(dataCategory.find((e) => e.parent === id))
}

/**
 * Get all direct and undirect categories under given category ID.
 *
 * @param {string} id - Category ID
 * @return {Object[]} Flat array of categories
 **/
const getAllSubs = (id) => {
	if (!hasSubs(id)) return []

	const subs = getSubs(id)

	if (!getKey(id, 'parent')) {
		subs.forEach((e) => {
			subs.push(...getSubs(e.id))
		})
	}

	return subs
}

export default { getRef, getKey, getSubs, hasSubs, getTops, getAllSubs }
