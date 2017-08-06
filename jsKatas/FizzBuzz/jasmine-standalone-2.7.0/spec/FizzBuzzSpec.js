describe('FizzBuzz', function () {
  it('should return 1 when 1 is passed', function () {
    expect(FizzBuzz(1)).toEqual(1)
  })
  it('should return 2 when 2 is passed', function () {
    expect(FizzBuzz(2)).toEqual(2)
  })
  it('should return Fizz when 3 is passed', function () {
    expect(FizzBuzz(3)).toEqual('Fizz')
  })
  it('should return Buzz when 5 is passed', function () {
    expect(FizzBuzz(5)).toEqual('Buzz')
  })
  it('should return Fizz when 6 is passed', function () {
    expect(FizzBuzz(6)).toEqual('Fizz')
  })
  it('should return Buzz when 10 is passed', function () {
    expect(FizzBuzz(10)).toEqual('Buzz')
  })
  it('should return FizzBuzz when 15 is passed', function () {
    expect(FizzBuzz(15)).toEqual('FizzBuzz')
  })
})
