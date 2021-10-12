const compoundInterest = require('./index')

describe('Compound Interest', () => {
  const expected = {
    totalInvestment: '2000.00',
    totalEarning: '16.04',
    accruedEarnings: '2016.04'
  }

  describe('when the interest is given monthly', () => {
    const actual = compoundInterest.calculate(1000, 500, 0.64, 2, true)
    checkActualValues(expected, actual)
  })

  describe('when the interest is given yearly', () => {
    const actual = compoundInterest.calculate(1000, 500, 8, 2, false)
    checkActualValues(expected, actual)
  })

  function checkActualValues (expected, actual) {
    describe('correctly calculates', () => {
      test('the total investment', () => {
        expect(actual.totalInvestment).toEqual(expected.totalInvestment)
      })

      test('the total earning', () => {
        expect(actual.totalEarning).toEqual(expected.totalEarning)
      })

      test('the accrued earnings', () => {
        expect(actual.accruedEarnings).toEqual(expected.accruedEarnings)
      })
    })
  }
})
