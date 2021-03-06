let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let savingsAccount = require('./savingsAccount')

let expected = {
  accruedAmount: 10926.83
}

describe('Savings account', () => {
  describe('with the correct parameters', () => {
    let params = {
      length: 24,
      initialAmount: 10000,
      interestRate: 6.39
    }

    savingsAccount.start(params)
    savingsAccount.calculate()
    it('checks the accrued amount', () => {
      expect(savingsAccount.accruedAmount).to.eql(expected.accruedAmount)
    })
  })
})
