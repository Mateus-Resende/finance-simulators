let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let leaseOrRent = require('./index')

describe('Lease or Rent', () => {
  let expected = {
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
    let params = {
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

    it('calculates the monthlyProfitability', () => {
      expect(leaseOrRent.monthlyProfitability).to.equal(expected.monthlyProfitability)
    })

    it('calculates the updatedBalance', () => {
      expect(leaseOrRent.updatedBalance).to.equal(expected.updatedBalance)
    })

    it('calculates the futureValueInitial', () => {
      expect(leaseOrRent.futureValueInitial).to.equal(expected.futureValueInitial)
    })

    it('calculates the monthlyNetProfitability', () => {
      expect(leaseOrRent.monthlyNetProfitability).to.equal(expected.monthlyNetProfitability)
    })

    it('calculates the netAccruedInvestment', () => {
      expect(leaseOrRent.netAccruedInvestment).to.equal(expected.netAccruedInvestment)
    })

    it('calculates the estimatedMonthlyAppreciation', () => {
      expect(leaseOrRent.estimatedMonthlyAppreciation).to.equal(expected.estimatedMonthlyAppreciation)
    })

    it('calculates the updatedRealStateValue', () => {
      expect(leaseOrRent.updatedRealStateValue).to.equal(expected.updatedRealStateValue)
    })

    it('calculates the leasingPaidValue', () => {
      expect(leaseOrRent.leasingPaidValue).to.equal(expected.leasingPaidValue)
    })

    it('calculates the leaseInvestmentRatio', () => {
      expect(leaseOrRent.leaseInvestmentRatio).to.equal(expected.leaseInvestmentRatio)
    })
  })
})
