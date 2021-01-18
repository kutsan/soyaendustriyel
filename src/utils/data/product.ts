// @ts-expect-error ts-migrate(2792) FIXME: Cannot find module '@/data/product.json'. Did you ... Remove this comment to see the full error message
import data from '@/data/product.json'

const dataProduct = data.product

/**
 * Gets product reference with ID.
 *
 * @param {string} id - Product ID
 * @return {Object} Direct product reference
 * */
const getRef = (id: any) => dataProduct.find((e: any) => e.id === id)

/**
 * Gets random products from optionally given category.
 *
 * @param {number} count - Product count
 * @param [string] category - Optional category to be used to filter
 * @param [string] exclude - Optionally exclude given id from returning products.
 * @return {Object[]} Array of random products
 * */
const getRandom = (count: any, category = null, exclude = null) => {
  const shuffle = (origArray: any) => {
    const array = Array.from(origArray)

    for (let i = array.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1))

      ;[array[i], array[j]] = [array[j], array[i]]
    }

    return array
  }

  const shuffledArray = category
    ? shuffle(
        dataProduct.filter((e: any) => e.category === category && e.id !== exclude)
      )
    : shuffle(dataProduct)

  return shuffledArray.slice(0, count)
}

/**
 * Filter product with Array.prototype.filter()
 * */
const filter = (cb: any) => dataProduct.filter(cb)

/**
 * Search product in names, brands or codes.
 *
 * @param {string} query - Search query.
 * @return {Object[]} Array of products in search result.
 * */
const search = (query: any) => {
  if (!query) return []
  const regex = new RegExp(query, 'gi')

  const items: any = []

  const addMatch = (attr: any, item: any, match: any) => {
    const index = item[attr].indexOf(match)
    items.push({
      ...item,
      match: {
        attr,
        index,
        value: match
      }
    })
  }

  for (const e of dataProduct) {
    const matches = {
      name: e.name && e.name.match(regex),
      brand: e.brand && e.brand.match(regex),
      code: e.code && e.code.match(regex)
    }

    if (matches.name) {
      addMatch('name', e, matches.name[0])
    } else if (matches.brand) {
      addMatch('brand', e, matches.brand[0])
    } else if (matches.code) {
      addMatch('code', e, matches.code[0])
    }

    if (items.length > 4) break
  }

  return items
}

export default { getRef, getRandom, filter, search }
