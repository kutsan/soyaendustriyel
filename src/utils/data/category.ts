import data from '@/data/category.json'

const dataCategory = data.category

export interface CategoryType {
  id: string
  name: string
  parent?: string
}

const getRef = (id: string): CategoryType | undefined =>
  dataCategory.find((e: CategoryType) => e.id === id)

const getKey = (id: string, key: keyof CategoryType): string | undefined => {
  const ref = getRef(id)

  return ref ? ref[key] : undefined
}

const getTops = (): CategoryType[] =>
  dataCategory.filter((e: CategoryType) => !e.parent)

const getSubs = (id: string): CategoryType[] =>
  dataCategory.filter((e: CategoryType) => e.parent === id)

const hasSubs = (id: string): boolean =>
  Boolean(dataCategory.find((e: CategoryType) => e.parent === id))

const getAllSubs = (id: string): CategoryType[] => {
  if (!hasSubs(id)) return []

  const subs = getSubs(id)

  if (!getKey(id, 'parent')) {
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
  getAllSubs,
}
