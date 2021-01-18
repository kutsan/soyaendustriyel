const { product } = require('./product.json')

const checkDuplicate = (callbackFn: any) => {
  product.forEach((candidate: any) => {
    product.forEach((tester: any) => {
      if (candidate !== tester) {
        callbackFn(candidate, tester)
      }
    })
  })
}

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('products should not have duplicate product id', () => {
  checkDuplicate((candidate: any, tester: any) => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(candidate.id).not.toBe(tester.id)
  })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('products should not have duplicate product name', () => {
  checkDuplicate((candidate: any, tester: any) => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(candidate.name).not.toBe(tester.name)
  })
})

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('products should not have duplicate product code', () => {
  checkDuplicate((candidate: any, tester: any) => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(candidate.code).not.toBe(tester.code)
  })
})
