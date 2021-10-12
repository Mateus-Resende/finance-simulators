const cdb = require('./cdbPostFixed')

describe('CDB Post Fixed', () => {
  const expected = {
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
    const params = {
      initial: 10000,
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-31'),
      cdiIndex: 6.39,
      cdiPercent: 120
    }

    cdb.start(params)

    test('calculates the amount of continuous days between start and end date', () => {
      expect(cdb.continuousDays).toEqual(expected.continuousDays)
    })

    test('calculates the amount of working days between start and end date', () => {
      expect(cdb.workingDays).toEqual(expected.workingDays)
    })

    test('calculates the cdi index per day', () => {
      expect(cdb.cdiPerWorkingDays).toEqual(expected.cdiPerWorkingDays)
    })

    test('calculates the profitability per day', () => {
      expect(cdb.grossProfitability).toEqual(expected.grossProfitability)
    })

    test('calculates the profitability in period', () => {
      expect(cdb.grossProfitabilityInPeriod).toEqual(expected.grossProfitabilityInPeriod)
    })

    test('calculates the incomeTaxOnProfitability', () => {
      expect(cdb.incomeTaxOnProfitability).toEqual(expected.incomeTaxOnProfitability)
    })

    test('calculates the netProfitabilityInPeriod', () => {
      expect(cdb.netProfitabilityInPeriod).toEqual(expected.netProfitabilityInPeriod)
    })

    test('calculates the netProfitabilityPerDay', () => {
      expect(cdb.netProfitabilityPerDay).toEqual(expected.netProfitabilityPerDay)
    })

    test('calculates the netProfitabilityPerMonth', () => {
      expect(cdb.netProfitabilityPerMonth).toEqual(expected.netProfitabilityPerMonth)
    })

    test('calculates the netProfitabilityPerYear', () => {
      expect(cdb.netProfitabilityPerYear).toEqual(expected.netProfitabilityPerYear)
    })

    test('calculates the netCdiPercent', () => {
      expect(cdb.netCdiPercent).toEqual(expected.netCdiPercent)
    })

    test('calculates the updatedInvestedAmount', () => {
      expect(cdb.updatedInvestedAmount).toEqual(expected.updatedInvestedAmount)
    })

    test('calculates the incomeTaxOnProfit', () => {
      expect(cdb.incomeTaxOnProfit).toEqual(expected.incomeTaxOnProfit)
    })

    test('calculates the netProfit', () => {
      expect(cdb.netProfit).toEqual(expected.netProfit)
    })

    test('calculates the percentNetProfit', () => {
      expect(cdb.percentNetProfit).toEqual(expected.percentNetProfit)
    })
  })
})
