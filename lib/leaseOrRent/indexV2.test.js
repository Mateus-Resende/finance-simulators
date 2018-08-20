const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const leaseOrRent = require('./indexV2')

describe('Lease or Rent Version 2', () => {
  const expected = {
    leaseInitialBalance: 480000,
    monthlyInterestRate: 0.00797414,
    maxInstallmentValue: 5160.92,
    amortization: 1333.33,
    balanceDue: 1.20,
    totalInterest: 690881.21,
    totalAmortization: 479998.80,
    totalInvested: 1558546.22,
    updatedInitialDeposit: 975657.18,
    updatedInvestedAmount: 2534203.4,
    leasingPaidRatio: 2.2,
    updatedRealStateValue: 1474105.33,
    realStatePurchaseCost: 42000.00,
    initialAmountNeeded: 162000,
    timeToBuyInMonths: 166,
    timeToBuyInYears: 13.83
  }

  describe('when given the correct values', () => {
    const params = {
      realStateValue: 600000,
      initialDeposit: 120000,
      length: 360,
      annualInterestRate: 0.10,
      profitPercent: 0.005
    }

    leaseOrRent.start(params)

    it('calculates the lease initial value', () => {
      expect(leaseOrRent.leaseInitialValue).to.eql(expected.leaseInitialValue)
    })

    it('calculates the monthly interest value', () => {
      expect(leaseOrRent.monthlyInterestRate).to.eql(expected.monthlyInterestRate)
    })

    it('calculates the max installment value', () => {
      expect(leaseOrRent.maxInstallmentValue).to.eql(expected.maxInstallmentValue)
    })

    it('calculates the amortization', () => {
      expect(leaseOrRent.amortization).to.eql(expected.amortization)
    })

    it('calculates the totalInterest', () => {
      expect(leaseOrRent.totalInterest).to.eql(expected.totalInterest)
    })

    it('calculates the totalAmortization', () => {
      expect(leaseOrRent.totalAmortization).to.eql(expected.totalAmortization)
    })

    it('calculates the totalInvested', () => {
      expect(leaseOrRent.totalInvested).to.eql(expected.totalInvested)
    })

    it('calculates the balanceDue', () => {
      expect(leaseOrRent.balanceDue).to.eql(expected.balanceDue)
    })

    it('calculates the updatedInvestedAmount', () => {
      expect(leaseOrRent.updatedInvestedAmount).to.eql(expected.updatedInvestedAmount)
    })

    it('calculates the updatedInitialDeposit', () => {
      expect(leaseOrRent.updatedInitialDeposit).to.eql(expected.updatedInitialDeposit)
    })

    it('calculates the leasingPaidRatio', () => {
      expect(leaseOrRent.leasingPaidRatio).to.eql(expected.leasingPaidRatio)
    })

    it('calculates the updatedRealStateValue', () => {
      expect(leaseOrRent.updatedRealStateValue).to.eql(expected.updatedRealStateValue)
    })

    it('calculates the realStatePurchaseCost', () => {
      expect(leaseOrRent.realStatePurchaseCost).to.eql(expected.realStatePurchaseCost)
    })

    it('calculates the initialAmountNeeded', () => {
      expect(leaseOrRent.initialAmountNeeded).to.eql(expected.initialAmountNeeded)
    })

    it('calculates the timeToBuyInMonths', () => {
      expect(leaseOrRent.timeToBuyInMonths).to.eql(expected.timeToBuyInMonths)
    })

    it('calculates the timeToBuyInYears', () => {
      expect(leaseOrRent.timeToBuyInYears).to.eql(expected.timeToBuyInYears)
    })
  })
})

