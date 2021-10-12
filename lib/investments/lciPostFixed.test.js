const lciPostFixed = require('./lciPostFixed')

describe('LCI Post Fixed', () => {
  const expected = {
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
    const params = {
      initial: 10000,
      length: 24,
      cdiIndex: 6.39,
      cdiPercent: 95
    }

    lciPostFixed.start(params)

    test('calculates the amount of continuous days between start and end date', () => {
      expect(lciPostFixed.continuousDays).toEqual(expected.continuousDays)
    })

    test('calculates the amount of working days between start and end date', () => {
      expect(lciPostFixed.workingDays).toEqual(expected.workingDays)
    })

    test('calculates the cdi index per day', () => {
      expect(lciPostFixed.cdiIndexPerDay).toEqual(expected.cdiIndexPerDay)
    })

    test('calculates the profitability per day', () => {
      expect(lciPostFixed.profitabilityPerDay).toEqual(expected.profitabilityPerDay)
    })

    test('calculates the profitability in period', () => {
      expect(lciPostFixed.profitabilityInPeriod).toEqual(expected.profitabilityInPeriod)
    })

    test('calculates the profitability per month', () => {
      expect(lciPostFixed.profitabilityPerMonth).toEqual(expected.profitabilityPerMonth)
    })

    test('calculates the profitability per year', () => {
      expect(lciPostFixed.profitabilityPerYear).toEqual(expected.profitabilityPerYear)
    })

    test('calculates the updated invested amount', () => {
      expect(lciPostFixed.updatedInvestedAmount).toEqual(expected.updatedInvestedAmount)
    })

    test('calculates the net profit', () => {
      expect(lciPostFixed.netProfit).toEqual(expected.netProfit)
    })

    test('calculates the net profitability', () => {
      expect(lciPostFixed.netProfitability).toEqual(expected.netProfitability)
    })
  })
})
