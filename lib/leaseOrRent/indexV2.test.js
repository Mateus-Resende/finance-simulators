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

    test('calculates the lease initial value', () => {
      expect(leaseOrRent.leaseInitialValue).toEqual(expected.leaseInitialValue)
    })

    test('calculates the monthly interest value', () => {
      expect(leaseOrRent.monthlyInterestRate).toEqual(expected.monthlyInterestRate)
    })

    test('calculates the max installment value', () => {
      expect(leaseOrRent.maxInstallmentValue).toEqual(expected.maxInstallmentValue)
    })

    test('calculates the amortization', () => {
      expect(leaseOrRent.amortization).toEqual(expected.amortization)
    })

    test('calculates the totalInterest', () => {
      expect(leaseOrRent.totalInterest).toEqual(expected.totalInterest)
    })

    test('calculates the totalAmortization', () => {
      expect(leaseOrRent.totalAmortization).toEqual(expected.totalAmortization)
    })

    test('calculates the totalInvested', () => {
      expect(leaseOrRent.totalInvested).toEqual(expected.totalInvested)
    })

    test('calculates the balanceDue', () => {
      expect(leaseOrRent.balanceDue).toEqual(expected.balanceDue)
    })

    test('calculates the updatedInvestedAmount', () => {
      expect(leaseOrRent.updatedInvestedAmount).toEqual(expected.updatedInvestedAmount)
    })

    test('calculates the updatedInitialDeposit', () => {
      expect(leaseOrRent.updatedInitialDeposit).toEqual(expected.updatedInitialDeposit)
    })

    test('calculates the leasingPaidRatio', () => {
      expect(leaseOrRent.leasingPaidRatio).toEqual(expected.leasingPaidRatio)
    })

    test('calculates the updatedRealStateValue', () => {
      expect(leaseOrRent.updatedRealStateValue).toEqual(expected.updatedRealStateValue)
    })

    test('calculates the realStatePurchaseCost', () => {
      expect(leaseOrRent.realStatePurchaseCost).toEqual(expected.realStatePurchaseCost)
    })

    test('calculates the initialAmountNeeded', () => {
      expect(leaseOrRent.initialAmountNeeded).toEqual(expected.initialAmountNeeded)
    })

    test('calculates the timeToBuyInMonths', () => {
      expect(leaseOrRent.timeToBuyInMonths).toEqual(expected.timeToBuyInMonths)
    })

    test('calculates the timeToBuyInYears', () => {
      expect(leaseOrRent.timeToBuyInYears).toEqual(expected.timeToBuyInYears)
    })
  })
})
