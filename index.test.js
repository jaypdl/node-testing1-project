const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input
  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  })
  it('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
    const inputCopy = { ...input }
    utils.trimProperties(input)
    expect(input).toEqual(inputCopy)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input
  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  })
  it('[3] returns an object with the properties trimmed', () => {
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
    const trimmed = utils.trimPropertiesMutation(input)
    expect(input).toEqual(trimmed)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
    const input = [0, 4, -6, 15, 9]
    const expected = 15
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    expect(counter.countDown()).toBe(2)
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe('summer')
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next()
    }
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(10)).toBe(10)
  })
  it('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(focus.tank).toBe(19)
  })
  it('[17] refueling allows to keep driving', () => {
    expect(focus.drive(615)).toBe(600)
    focus.refuel(5)
    focus.refuel(10)
    expect(focus.tank).toBe(15)
    expect(focus.drive(600)).toBe(1050)
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(99)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', async () => {
    const isEven = await utils.isEvenNumberAsync(8)
    expect(isEven).toBeTruthy()
  })
  it('[20] resolves false if passed an odd number', async () => {
    const isEven = await utils.isEvenNumberAsync(9)
    expect(isEven).toBeFalsy()
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    const isEven = await utils.isEvenNumberAsync('9')
    expect(isEven).toBe('number must be a number')
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    const isEven = await utils.isEvenNumberAsync(NaN)
    expect(isEven).toBe('number must be a number')
  })
})
