const cdb = require('./cdbPostFixed')

describe('CDB Post Fixed', () => {
  test('calculates the values when the profitability is 17.5%', () => {
    const expected = {
      continuousDays: 365,
      workingDays: 250,
      cdiPerWorkingDays: 0.000246,
      grossProfitability: 0.000295,
      grossProfitabilityInPeriod: 0.0765,
      incomeTaxOnProfitability: 0.1750,
      netProfitabilityInPeriod: 0.0631,
      netProfitabilityPerDay: 0.000245,
      netProfitabilityPerMonth: 0.0052,
      netProfitabilityPerYear: 0.0636,
      netCdiPercent: 0.9959,
      updatedInvestedAmount: 10765,
      incomeTaxOnProfit: 133.88,
      netAmountOfInvestment: 10631.12,
      netProfit: 631.12,
      percentNetProfit: 0.0631
    }

    const params = {
      initial: 10000,
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-31'),
      cdiIndex: 6.39,
      cdiPercent: 120
    }

    expect(cdb.calculate(params)).toEqual(expected)
  })

  test('calculates the values when the profitability is 20%', () => {
    const expected = {
      continuousDays: 181,
      workingDays: 123,
      cdiPerWorkingDays: 0.000246,
      grossProfitability: 0.000295,
      grossProfitabilityInPeriod: 0.0369,
      incomeTaxOnProfitability: 0.20,
      netProfitabilityInPeriod: 0.0295,
      netProfitabilityPerDay: 0.000236,
      netProfitabilityPerMonth: 0.005,
      netProfitabilityPerYear: 0.0614,
      netCdiPercent: 0.9593,
      updatedInvestedAmount: 10369,
      incomeTaxOnProfit: 73.8,
      netAmountOfInvestment: 10295.2,
      netProfit: 295.2,
      percentNetProfit: 0.0295
    }

    const params = {
      initial: 10000,
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-06-30'),
      cdiIndex: 6.39,
      cdiPercent: 120
    }

    expect(cdb.calculate(params)).toEqual(expected)
  })
})
