import { product as dataProduct } from '@/data/product.json'

/**
 * Gets product reference with ID.
 *
 * @param {string} id - Product ID
 * @return {Object} Direct product reference
 **/
const getRef = (id) => {
	return dataProduct.find((e) => e.id === id)
}

/**
 * Gets random products from optionally given category.
 *
 * @param {number} count - Product count
 * @param [string] category - Optional category to be used to filter
 * @return {Object[]} Array of random products
 **/
const getRandom = (count, category = null) => {
	const shuffle = (arr) => {
		const a = Array.from(arr)

		if (count > arr.length) {
			count = arr.length
		}

		for (let i = count - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))

			;[a[i], a[j]] = [a[j], a[i]]
		}

		return a
	}

	return category
		? shuffle(dataProduct.filter((e) => e.category === category))
		: shuffle(dataProduct)
}

/**
 * Filter product with Array.prototype.filter()
 **/
const filter = (cb) => {
	return dataProduct.filter(cb)
}

export default { getRef, getRandom, filter }
