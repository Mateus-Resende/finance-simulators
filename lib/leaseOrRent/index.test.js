const leaseOrRent = require('./index')

describe('Lease or Rent', () => {
  const expected = {
    monthlyProfitability: 0.006434,
    updatedBalance: 2260.24,
    futureValueInitial: 391520.40,
    monthlyNetProfitability: 0.0055,
    netAccruedInvestment: 1435174.83,
    estimatedMonthlyAppreciation: 0.003274,
    updatedRealStateValue: 1036461.04,
    leasingPaidValue: 1449258.00,
    leaseInvestmentRatio: 1.38
  }

  describe('when the params are given correctly', () => {
    const params = {
      realStateValue: 473000,
      rentValue: 2147,
      annualInflation: 0.04,
      annualInvestmentProfitability: 0.08,
      incomeTaxOnInvestment: 0.15,
      leaseInstallment: 4407.24,
      numberOfInstallments: 240,
      totalValueOfInstallment: 1057737.60,
      initialDeposit: 84000
    }

    leaseOrRent.start(params)

    test('calculates the monthlyProfitability', () => {
      expect(leaseOrRent.monthlyProfitability).toEqual(expected.monthlyProfitability)
    })

    test('calculates the updatedBalance', () => {
      expect(leaseOrRent.updatedBalance).toEqual(expected.updatedBalance)
    })

    test('calculates the futureValueInitial', () => {
      expect(leaseOrRent.futureValueInitial).toEqual(expected.futureValueInitial)
    })

    test('calculates the monthlyNetProfitability', () => {
      expect(leaseOrRent.monthlyNetProfitability).toEqual(expected.monthlyNetProfitability)
    })

    test('calculates the netAccruedInvestment', () => {
      expect(leaseOrRent.netAccruedInvestment).toEqual(expected.netAccruedInvestment)
    })

    test('calculates the estimatedMonthlyAppreciation', () => {
      expect(leaseOrRent.estimatedMonthlyAppreciation).toEqual(expected.estimatedMonthlyAppreciation)
    })

    test('calculates the updatedRealStateValue', () => {
      expect(leaseOrRent.updatedRealStateValue).toEqual(expected.updatedRealStateValue)
    })

    test('calculates the leasingPaidValue', () => {
      expect(leaseOrRent.leasingPaidValue).toEqual(expected.leasingPaidValue)
    })

    test('calculates the leaseInvestmentRatio', () => {
      expect(leaseOrRent.leaseInvestmentRatio).toEqual(expected.leaseInvestmentRatio)
    })
  })
})
