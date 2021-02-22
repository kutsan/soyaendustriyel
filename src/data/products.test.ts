import { ProductType } from '@/utils/data'
import { products } from './products.json'

const checkDuplicate = (
  callbackFn: (candidate: ProductType, tester: ProductType) => void
): void => {
  products.forEach((candidate: ProductType) => {
    products.forEach((tester: ProductType) => {
      if (candidate !== tester) {
        callbackFn(candidate, tester)
      }
    })
  })
}

test('products should not have duplicate product id', () => {
  checkDuplicate((candidate, tester) => {
    expect(candidate.id).not.toBe(tester.id)
  })
})

test('products should not have duplicate product name', () => {
  checkDuplicate((candidate, tester) => {
    expect(candidate.name).not.toBe(tester.name)
  })
})

test('products should not have duplicate product code', () => {
  checkDuplicate((candidate, tester) => {
    expect(candidate.code).not.toBe(tester.code)
  })
})
