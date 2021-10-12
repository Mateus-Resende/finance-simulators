const savingsAccount = require('./savingsAccount')

const expected = {
  accruedAmount: 10926.83
}

describe('Savings account', () => {
  describe('with the correct parameters', () => {
    const params = {
      length: 24,
      initialAmount: 10000,
      interestRate: 6.39
    }

    savingsAccount.start(params)
    savingsAccount.calculate()
    test('checks the accrued amount', () => {
      expect(savingsAccount.accruedAmount).toEqual(expected.accruedAmount)
    })
  })
})
