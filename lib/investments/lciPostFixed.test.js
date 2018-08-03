let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let lciPostFixed = require('./lciPostFixed')

describe("LCI Post Fixed", () => {
  let expected = {
    continuousDays: 730,
    workingDays: 504,
    cdiIndexPerDay: 0.00024583,
    profitabilityPerDay: 0.00023354,
    profitabilityPerMonth: 0.0049,
    profitabilityPerYear: 0.0606,
    profitabilityInPeriod: 0.1249,
    updatedInvestedAmount: 11249,
    netProfit: 1249,
    netProfitability: 0.1249
  }

  describe('when given the parameters', () => {
    let params = {
      initial: 10000,
      length: 24,
      cdiIndex: 6.39,
      cdiPercent: 95
    }

    lciPostFixed.start(params)

    it('calculates the amount of continuous days between start and end date', () => {
      expect(lciPostFixed.continuousDays).to.equal(expected.continuousDays)
    })

    it('calculates the amount of working days between start and end date', () => {
      expect(lciPostFixed.workingDays).to.equal(expected.workingDays)
    })

    it('calculates the cdi index per day', () => {
      expect(lciPostFixed.cdiIndexPerDay).to.equal(expected.cdiIndexPerDay)
    })

    it('calculates the profitability per day', () => {
      expect(lciPostFixed.profitabilityPerDay).to.equal(expected.profitabilityPerDay)
    })

    it('calculates the profitability in period', () => {
      expect(lciPostFixed.profitabilityInPeriod).to.equal(expected.profitabilityInPeriod)
    })

    it('calculates the profitability per month', () => {
      expect(lciPostFixed.profitabilityPerMonth).to.equal(expected.profitabilityPerMonth)
    })

    it('calculates the profitability per year', () => {
      expect(lciPostFixed.profitabilityPerYear).to.equal(expected.profitabilityPerYear)
    })

    it('calculates the updated invested amount', () => {
      expect(lciPostFixed.updatedInvestedAmount).to.equal(expected.updatedInvestedAmount)
    })

    it('calculates the net profit', () => {
      expect(lciPostFixed.netProfit).to.equal(expected.netProfit)
    })

    it('calculates the net profitability', () => {
      expect(lciPostFixed.netProfitability).to.equal(expected.netProfitability)
    })
  })
})
