let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let compoundInterest = require('./index')

describe('Compound Interest', () => {
  let expected = {
    totalInvestment: 51000,
    totalEarning: 20764.08,
    accruedEarnings: 71764.08,
    monthlyInterest: 0.64
  }

  describe('when the interest is given monthly', () => {
    let actual = compoundInterest.calculate(1000, 500, 0.64, 100, true)
    checkActualValues(expected, actual)
  })

  describe('when the interest is given yearly', () => {
    let actual = compoundInterest.calculate(1000, 500, 8, 100, false)
    checkActualValues(expected, actual)
  })

  function checkActualValues (expected, actual) {
    describe('correctly calculates', () => {
      it('the total investment', () => {
        expect(actual.totalInvestment).to.deep.equal(expected.totalInvestment)
      })

      it('the total earning', () => {
        expect(actual.totalEarning).to.deep.equal(expected.totalEarning)
      })

      it('the accrued earnings', () => {
        expect(actual.accruedEarnings).to.deep.equal(expected.accruedEarnings)
      })

      it('the monthly interest', () => {
        expect(actual.monthlyInterest).to.deep.equal(expected.monthlyInterest)
      })
    })
  }
})
