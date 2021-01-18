// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/data/category.json'. Did you... Remove this comment to see the full error message
import data from '@/data/category.json'

const dataCategory = data.category

/**
 * Gets category reference with ID.
 *
 * @param {string} id - Category ID
 * @return {Object} Direct category reference.
 * */
const getRef = (id: any) => dataCategory.find((e: any) => e.id === id)

/**
 * Gets given category key with ID.
 *
 * @param {string} id - Category ID
 * @return {Object} Given key value
 * */
const getKey = (id: any, key: any) => {
  const ref = getRef(id)

  return ref ? ref[key] : null
}

/**
 * Gets topmost categories.
 *
 * @return {Object[]} Array of categories
 * */
const getTops = () => dataCategory.filter((e: any) => !e.parent)

/**
 * Gets sub categories of given category id.
 *
 * @param {string} id - Category ID
 * @return {Object[]} Array of categories
 * */
const getSubs = (id: any) => dataCategory.filter((e: any) => e.parent === id)

/**
 * Checks whether or not given category has categories under.
 *
 * @param {string} id - Category ID
 * @return {boolean} True if given category has sub categories, false otherwise.
 * */
const hasSubs = (id: any) => Boolean(dataCategory.find((e: any) => e.parent === id))

/**
 * Get all direct and undirect categories under given category ID.
 *
 * @param {string} id - Category ID
 * @return {Object[]} Flat array of categories
 * */
const getAllSubs = (id: any) => {
  if (!hasSubs(id)) return []

  const subs = getSubs(id)

  if (!getKey(id, 'parent')) {
    subs.forEach((cur: any) => {
      subs.push(...getSubs(cur.id))
    })
  }

  return subs
}

export default { getRef, getKey, getSubs, hasSubs, getTops, getAllSubs }
