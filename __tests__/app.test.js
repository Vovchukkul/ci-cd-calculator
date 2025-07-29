
const { add, substitution } = require('../app')

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5)
})

test('sub 3 - 1 to equal 2', () => {
    expect(substitution(3, 1)).toBe(2)
})