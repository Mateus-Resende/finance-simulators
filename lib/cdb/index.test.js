let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let lci = require('./index')

describe("LCI Post Fixed", () => {
  let expected = {
    continuousDays: 365,
    workingDays: 250,
    cdiIndexPerDay: 0.00052916,
    profitabilityPerDay: 0.0005027,
    profitabilityPerMonth: 0.0106,
    profitabilityPerYear: 0.135,
    profitabilityInPeriod: 0.1339,
    updatedInvestedAmount: 11339,
    netProfit: 1339,
    netProfitability: 0.1339
  }

  describe('when given the parameters', () => {
    let params = {
      initial: 10000,
      startDate: new Date("2016-01-01"),
      endDate: new Date("2016-12-31"),
      cdiIndex: 14.14,
      cdiPercent: 95
    }

    lci.start(params)

    it('calculates the amount of continuous days between start and end date', () => {
      expect(lci.continuousDays).to.equal(expected.continuousDays)
    })

    it('calculates the amount of working days between start and end date', () => {
      expect(lci.workingDays).to.equal(expected.workingDays)
    })

    it('calculates the cdi index per day', () => {
      expect(lci.cdiIndexPerDay).to.equal(expected.cdiIndexPerDay)
    })

    it('calculates the profitability per day', () => {
      expect(lci.profitabilityPerDay).to.equal(expected.profitabilityPerDay)
    })

    it('calculates the profitability in period', () => {
      expect(lci.profitabilityInPeriod).to.equal(expected.profitabilityInPeriod)
    })

    it('calculates the profitability per month', () => {
      expect(lci.profitabilityPerMonth).to.equal(expected.profitabilityPerMonth)
    })

    it('calculates the profitability per year', () => {
      expect(lci.profitabilityPerYear).to.equal(expected.profitabilityPerYear)
    })

    it('calculates the updated invested amount', () => {
      expect(lci.updatedInvestedAmount).to.equal(expected.updatedInvestedAmount)
    })

    it('calculates the net profit', () => {
      expect(lci.netProfit).to.equal(expected.netProfit)
    })

    it('calculates the net profitability', () => {
      expect(lci.netProfitability).to.equal(expected.netProfitability)
    })
  })
})
