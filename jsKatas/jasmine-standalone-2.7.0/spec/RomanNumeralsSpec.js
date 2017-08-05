describe("RomanNumerals", function () {
  var numerals = {
    1: 'I',
    2: 'II',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    45: 'XLV',
    50: 'L',
    54: 'LIV',
    90: 'XC',
    100: 'C',
  }

  _.each(numerals, function(RomanNum, ActualNum){
    it('returns ' + RomanNum + ' for ' + ActualNum, function(){
      expect(RomanNumerals(ActualNum)).toEqual(RomanNum)
    })
  })
})

describe("RomanNumeral", function () {
  var numerals = {
    1: 'I',
    2: 'II',
    4: 'IV',
    5: 'V',
    10: 'X',
    50: 'L'
  }

  it('converts numbers to Roman Numerals', function () {
    expect(RomanNumeral(1)).toEqual('I')
    expect(RomanNumeral(2)).toEqual('II')
    expect(RomanNumeral(4)).toEqual('IV')
    expect(RomanNumeral(5)).toEqual('V')
    expect(RomanNumeral(10)).toEqual('X')
    expect(RomanNumeral(50)).toEqual('L')
  })
})
