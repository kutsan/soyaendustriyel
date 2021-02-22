import data from '@/data/categories.json'

const dataCategories = data.categories

export interface CategoryType {
  id: string
  name: string
  parent?: string
}

const getRef = (id: string): CategoryType | undefined =>
  dataCategories.find((e: CategoryType) => e.id === id)

const getKey = (id: string, key: keyof CategoryType): string | undefined => {
  const ref = getRef(id)

  return ref?.[key]
}

const getTops = (): CategoryType[] =>
  dataCategories.filter((e: CategoryType) => e.parent === undefined)

const getSubs = (id: string): CategoryType[] =>
  dataCategories.filter((e: CategoryType) => e.parent === id)

const hasSubs = (id: string): boolean =>
  Boolean(dataCategories.find((e: CategoryType) => e.parent === id))

const getAllSubs = (id: string): CategoryType[] => {
  if (!hasSubs(id)) return []

  const subs = getSubs(id)

  if (getKey(id, 'parent') === undefined) {
    subs.forEach((e: CategoryType) => {
      subs.push(...getSubs(e.id))
    })
  }

  return subs
}

export const category = {
  getRef,
  getKey,
  getSubs,
  hasSubs,
  getTops,
  getAllSubs
}
