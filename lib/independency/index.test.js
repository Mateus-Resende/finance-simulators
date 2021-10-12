const independency = require('./index')

describe('Financial Independency', () => {
  const expected = {
    monthlyNetProfitability: 0.0035,
    acumulatedValue: 1500000,
    monthlySavings: 1956.08,
    interestProfit: 770811.2,
    cdiIndexMonthly: 0.0041,
    savingsIndexMonthly: 0.0057,
    selicIndexMonthly: 0.0057,
    ipcaIndexMonthly: 0.0025
  }

  describe('when given the parameters', () => {
    const params = {
      intendedRevenue: 5000,
      currentSavings: 25000,
      length: 360,
      monthlyGrossProfitability: 0.007,
      incomeTax: 0.15
    }

    independency.start(params)

    test('calculates the monthly cdi index', () => {
      expect(independency.cdiIndexMonthly).toEqual(expected.cdiIndexMonthly)
    })

    test('calculates the monthly savings index', () => {
      expect(independency.savingsIndexMonthly).toEqual(expected.savingsIndexMonthly)
    })

    test('calculates the monthly selic index', () => {
      expect(independency.selicIndexMonthly).toEqual(expected.selicIndexMonthly)
    })

    test('calculates the monthly ipca index', () => {
      expect(independency.ipcaIndexMonthly).toEqual(expected.ipcaIndexMonthly)
    })

    test('calculates the monthly net profitability', () => {
      expect(independency.monthlyNetProfitability).toEqual(expected.monthlyNetProfitability)
    })

    test('calculates the acumulated value', () => {
      expect(independency.acumulatedValue).toEqual(expected.acumulatedValue)
    })

    test('calculates the monthly savings needed', () => {
      expect(independency.monthlySavings).toEqual(expected.monthlySavings)
    })

    test('calculates the interest profit for the investment', () => {
      expect(independency.interestProfit).toEqual(expected.interestProfit)
    })
  })
})
