function RomanNumerals(num) {
  const ActualNum = [100, 90, 50, 40, 30, 20, 10, 9, 5, 4, 2, 1]
  const RomanNum = ['C', 'XC', 'L', 'XL', 'XXX', 'XX', 'X', 'IX', 'V', 'IV', 'II', 'I']
  let conversion = ''

  for(let i = 0; i < ActualNum.length; i++){
    while (num >= ActualNum[i]){
      conversion = conversion + RomanNum[i]
      num = num - ActualNum[i]
    }
  }

  return conversion
}
// Another approach
function RomanNumeral(number) {
  const numerals = {
    1: 'I',
    2: 'II',
    4: 'IV',
    5: 'V',
    10: 'X',
    50: 'L'
  }

  return numerals[number];
}
