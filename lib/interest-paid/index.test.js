const interest = require('./index')

describe('Pagamento de juros', () => {
  describe('when missing total value', () => {
    test('calculates the totalValue', () => {
      const params = {
        installmentValue: 100,
        length: 12,
        monthlyInterest: 0.0473
      }

      expect(interest.calculate(params))
        .toEqual({
          totalValue: 899.98,
          installmentValue: 100,
          length: 12,
          monthlyInterest: 0.0473,
          totalValuePaid: 1200,
          totalInterestPaid: 300.02,
          interestAmountRatio: 0.33
        })
    })
  })

  describe('when missing installment value', () => {
    test('calculates the installmentValue', () => {
      const params = {
        totalValue: 900,
        length: 12,
        monthlyInterest: 0.0473
      }

      expect(interest.calculate(params)).toEqual({
        totalValue: 900,
        installmentValue: 100,
        length: 12,
        monthlyInterest: 0.0473,
        totalValuePaid: 1200,
        totalInterestPaid: 300,
        interestAmountRatio: 0.33
      })
    })
  })

  describe('when missing length', () => {
    test('calculates the length', () => {
      const params = {
        totalValue: 900,
        installmentValue: 100,
        monthlyInterest: 0.0473
      }

      const result = interest.calculate(params)
      expect(result).toEqual({
        totalValue: 900,
        installmentValue: 100,
        length: 12,
        monthlyInterest: 0.0473,
        totalValuePaid: 1200,
        totalInterestPaid: 300,
        interestAmountRatio: 0.33
      })
    })
  })

  describe('when missing monthly interest', () => {
    test('calculates the monthlyInterest', () => {
      const params = {
        totalValue: 900,
        installmentValue: 100,
        length: 12
      }

      const result = interest.calculate(params)
      expect(result).toEqual({
        totalValue: 900,
        installmentValue: 100,
        length: 12,
        monthlyInterest: 0.0473,
        totalValuePaid: 1200,
        totalInterestPaid: 300,
        interestAmountRatio: 0.33
      })
    })
  })
})
