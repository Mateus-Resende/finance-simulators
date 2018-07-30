let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let independency = require('./index')

describe("Financial Independency", () => {
  let expected = {
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
    let params = {
      intendedRevenue: 5000,
      currentSavings: 25000,
      length: 360,
      monthlyGrossProfitability: 0.007,
      incomeTax: 0.15
    }

    independency.start(params)

    it('calculates the monthly cdi index', () => {
      expect(independency.cdiIndexMonthly).to.equal(expected.cdiIndexMonthly)
    })

    it('calculates the monthly savings index', () => {
      expect(independency.savingsIndexMonthly).to.equal(expected.savingsIndexMonthly)
    })

    it('calculates the monthly selic index', () => {
      expect(independency.selicIndexMonthly).to.equal(expected.selicIndexMonthly)
    })

    it('calculates the monthly ipca index', () => {
      expect(independency.ipcaIndexMonthly).to.equal(expected.ipcaIndexMonthly)
    })

    it('calculates the monthly net profitability', () => {
      expect(independency.monthlyNetProfitability).to.equal(expected.monthlyNetProfitability)
    })

    it('calculates the acumulated value', () => {
      expect(independency.acumulatedValue).to.equal(expected.acumulatedValue)
    })

    it('calculates the monthly savings needed', () => {
      expect(independency.monthlySavings).to.equal(expected.monthlySavings)
    })

    it('calculates the interest profit for the investment', () => {
      expect(independency.interestProfit).to.equal(expected.interestProfit)
    })
  })
})
