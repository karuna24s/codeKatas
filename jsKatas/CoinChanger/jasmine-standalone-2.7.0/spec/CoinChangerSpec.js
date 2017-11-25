describe('CoinChanger', function () {
  it ('returns 1 penny for 1', function () {
    expect(CoinChanger(1)).toEqual([1])
  })
  it ('returns 2 pennies for 2', function () {
    expect(CoinChanger(2)).toEqual([1, 1])
  })
  it ('returns 1 nickel for', function () {
    expect(CoinChanger(5)).toEqual([5])
  })
  it ('returns 1 nickel, 3 pennies for 8', function () {
    expect(CoinChanger(8)).toEqual([5, 1, 1, 1])
  })
  it ('returns 1 dime for 1', function () {
    expect(CoinChanger(10)).toEqual([10])
  })
  it ('returns 1 dime, 1 nickel for 15', function () {
    expect(CoinChanger(15)).toEqual([10, 5])
  })
  it ('returns 1 dime, 1 nickel, 2 pennies for 17', function () {
    expect(CoinChanger(17)).toEqual([10, 5, 1, 1])
  })
  it ('returns 1 quarter for 25', function () {
    expect(CoinChanger(25)).toEqual([25])
  })
  it ('returns 3 quarters, 1 dime, 5, 1 nickel, 4 pennies for 92', function () {
    expect(CoinChanger(92)).toEqual([25, 25, 25, 10, 5, 1, 1])
  })
})
