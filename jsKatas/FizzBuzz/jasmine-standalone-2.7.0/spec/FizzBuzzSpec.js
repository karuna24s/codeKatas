describe('FizzBuzz', function () {
  it('returns 1 when 1 is passed', function () {
    expect(FizzBuzz(1)).toEqual(1)
  })
  it('returns 2 when 2 is passed', function () {
    expect(FizzBuzz(2)).toEqual(2)
  })
  it('returns Fizz when 3 is passed', function () {
    expect(FizzBuzz(3)).toEqual('Fizz')
  })
  it('returns Buzz when 5 is passed', function () {
    expect(FizzBuzz(5)).toEqual('Buzz')
  })
  it('returns Fizz when 6 is passed', function () {
    expect(FizzBuzz(6)).toEqual('Fizz')
  })
  it('returns Buzz when 10 is passed', function () {
    expect(FizzBuzz(10)).toEqual('Buzz')
  })
  it('returns FizzBuzz when 15 is passed', function () {
    expect(FizzBuzz(15)).toEqual('FizzBuzz')
  })
})
