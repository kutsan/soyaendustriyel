export interface ProductType {
  id: string
  category: string
  name: string
  brand: string
  code: string
  desc:
    | string
    | {
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
