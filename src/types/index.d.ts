export interface ProductType {
  id: string
  category: string
  name: string
  brand: string
  code: string
  desc?: {
    text: string
    table?: Array<{
      key: string
      value: string
    }>
    list?: string[]
  }
}

export interface CategoryType {
  id: string
  name: string
  parent?: string
}

export interface SearchResultType extends ProductType {
  match: {
    attr: 'name' | 'brand' | 'code'
    index: number
    value: string
  }
}
