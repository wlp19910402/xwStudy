import { mount } from '@vue/test-utils'
// import Logo from '@/components/Logo.vue'

// describe('Logo', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Logo)
//     expect(wrapper.isVueInstance()).toBeTruthy();
//     // expect(a=90).toBe(a=90)
//   })
// })
//

//匹配精确相等 toBe()
test('is a Vue instance', () => {
  expect(4).toBe(4)
})
//匹配对象 toEqual()
test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})
//匹配相反的 not.toBe()

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0)
    }
  }
})

// toBeNull 只匹配 null
// toBeUndefined 只匹配 undefined
// toBeDefined 与 toBeUndefined 相反
// toBeTruthy 匹配任何 if 语句为真
// toBeFalsy 匹配任何 if 语句为假

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const n = 0
  expect(n).not.toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

//数字
// toBeGreaterThan 只匹配 大于
// toBeGreaterThanOrEqual 只匹配 大于等于
// toBeLessThan 与 小于
// toBeLessThanOrEqual 匹配 小于等于

test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(4)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  expect(value).toBe(4)
  expect(value).toEqual(4)
})
//测试浮点数相等  toBeCloseTo()
test('两个浮点数字相加', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3)
  expect(value).toBeCloseTo(0.3)
})

//toContain 来检查一个数组或可迭代对象是否包含某个特定项

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
]

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
  expect(new Set(shoppingList)).toContain('beer')
})

// 如果你想要测试的特定函数抛出一个错误，在它调用时，使用 toThrow
function compileA() {
  throw new Error('you are using the wrong JDK')
}
test('compiling android goes as expected', () => {
  expect(compileA).toThrow()
  expect(compileA).toThrow(Error)

  expect(compileA).toThrow('you are using the wrong JDK')
  expect(compileA).toThrow(/JDK/)
})

// beforeAll(() => console.log('1 - beforeAll'));
// afterAll(() => console.log('1 - afterAll'));
// beforeEach(() => console.log('1 - beforeEach'));
// afterEach(() => console.log('1 - afterEach'));
// test('', () => console.log('1 - test'));
// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'));
//   afterAll(() => console.log('2 - afterAll'));
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));
//   test('', () => console.log('2 - test'));
// });

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}
describe('使用 mock 函数', () => {
  const mockCallback = jest.fn((x) => 42 + x)
  forEach([0, 1], mockCallback)

  test('测试mock', () => {
    // 此 mock 函数被调用了两次
    expect(mockCallback.mock.calls.length).toBe(2)

    // 第一次调用函数时的第一个参数是 0
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // 第二次调用函数时的第一个参数是 1
    expect(mockCallback.mock.calls[1][0]).toBe(1)

    // 第一次函数调用的返回值是 42
    expect(mockCallback.mock.results[0].value).toBe(42)
  })

  // const myMock = jest.fn();

  // const a = new myMock();
  // const b = {};
  // const bound = myMock.bind(b);
  // bound();

  // console.log(myMock.mock.instances);
})

describe('.mock的属性', () => {
  const myMock = jest.fn()
  const a = new myMock()
  const b = {}
  const bound = myMock.bind(b)
  bound()
  console.log(myMock.mock.instances)
})
