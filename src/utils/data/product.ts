import data from '@/data/product.json'
import { ProductType, SearchResultType } from '@/types/index'

const dataProduct = data.product

const getRef = (id: string): ProductType =>
  dataProduct.find((e: ProductType) => e.id === id)

const getRandom = (
  count: number,
  category?: string,
  exclude?: string
): ProductType[] => {
  const shuffle = (origArray: ProductType[]) => {
    const array = Array.from(origArray)

    array.forEach((_, i) => {
      const j = Math.floor(Math.random() * (i + 1))

      ;[array[i], array[j]] = [array[j], array[i]]
    })

    return array
  }

  const shuffledArray = category
    ? shuffle(
        dataProduct.filter(
          (e: ProductType) => e.category === category && e.id !== exclude
        )
      )
    : shuffle(dataProduct)

  return shuffledArray.slice(0, count)
}

const search = (query: string): SearchResultType[] => {
  if (!query) return []

  const regex = new RegExp(query, 'gi')
  const items: SearchResultType[] = []

  const addMatch = (
    attr: 'name' | 'brand' | 'code',
    item: ProductType,
    match: string
  ) => {
    const index = item[attr].indexOf(match)

    items.push({
      ...item,
      match: {
        attr,
        index,
        value: match,
      },
    })
  }

  dataProduct.forEach((e: ProductType) => {
    const matches = {
      name: e.name && e.name.match(regex),
      brand: e.brand && e.brand.match(regex),
      code: e.code && e.code.match(regex),
    }

    if (matches.name) {
      addMatch('name', e, matches.name[0])
    } else if (matches.brand) {
      addMatch('brand', e, matches.brand[0])
    } else if (matches.code) {
      addMatch('code', e, matches.code[0])
    }
  })

  return items
}

const filter = (callback: (val: ProductType) => boolean): ProductType[] =>
  dataProduct.filter(callback)

export default { getRef, getRandom, search, filter }
