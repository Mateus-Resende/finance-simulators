let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let cdb = require('./cdbPostFixed')

describe("CDB Post Fixed", () => {
  let expected = {
    continuousDays: 365,
    workingDays: 250,
    cdiPerWorkingDays: 0.000246,
    grossProfitability: 0.000295,
    grossProfitabilityInPeriod: 0.076526,
    incomeTaxOnProfitability: 0.1750,
    netProfitabilityInPeriod: 0.0631,
    netProfitabilityPerDay: 0.000245,
    netProfitabilityPerMonth: 0.005153,
    netProfitabilityPerYear: 0.063621,
    netCdiPercent: 0.995935,
    updatedInvestedAmount: 10765.26,
    incomeTaxOnProfit: 133.92,
    netAmountOfInvestment: 10765.26,
    netProfit: 631.34,
    percentNetProfit: 0.0631
  }

  describe('when given the parameters', () => {
    let params = {
      initial: 10000,
      startDate: new Date("2016-01-01"),
      endDate: new Date("2016-12-31"),
      cdiIndex: 6.39,
      cdiPercent: 120
    }

    cdb.start(params)

    it('calculates the amount of continuous days between start and end date', () => {
      expect(cdb.continuousDays).to.equal(expected.continuousDays)
    })

    it('calculates the amount of working days between start and end date', () => {
      expect(cdb.workingDays).to.equal(expected.workingDays)
    })

    it('calculates the cdi index per day', () => {
      expect(cdb.cdiPerWorkingDays).to.equal(expected.cdiPerWorkingDays)
    })

    it('calculates the profitability per day', () => {
      expect(cdb.grossProfitability).to.equal(expected.grossProfitability)
    })

    it('calculates the profitability in period', () => {
      expect(cdb.grossProfitabilityInPeriod).to.equal(expected.grossProfitabilityInPeriod)
    })

    it('calculates the incomeTaxOnProfitability', () => {
      expect(cdb.incomeTaxOnProfitability).to.equal(expected.incomeTaxOnProfitability)
    })

    it('calculates the netProfitabilityInPeriod', () => {
      expect(cdb.netProfitabilityInPeriod).to.equal(expected.netProfitabilityInPeriod)
    })

    it('calculates the netProfitabilityPerDay', () => {
      expect(cdb.netProfitabilityPerDay).to.equal(expected.netProfitabilityPerDay)
    })

    it('calculates the netProfitabilityPerMonth', () => {
      expect(cdb.netProfitabilityPerMonth).to.equal(expected.netProfitabilityPerMonth)
    })

    it('calculates the netProfitabilityPerYear', () => {
      expect(cdb.netProfitabilityPerYear).to.equal(expected.netProfitabilityPerYear)
    })

    it('calculates the netCdiPercent', () => {
      expect(cdb.netCdiPercent).to.equal(expected.netCdiPercent)
    })

    it('calculates the updatedInvestedAmount', () => {
      expect(cdb.updatedInvestedAmount).to.equal(expected.updatedInvestedAmount)
    })

    it('calculates the incomeTaxOnProfit', () => {
      expect(cdb.incomeTaxOnProfit).to.equal(expected.incomeTaxOnProfit)
    })

    it('calculates the netProfit', () => {
      expect(cdb.netProfit).to.equal(expected.netProfit)
    })

    it('calculates the percentNetProfit', () => {
      expect(cdb.percentNetProfit).to.equal(expected.percentNetProfit)
    })
  })
})
