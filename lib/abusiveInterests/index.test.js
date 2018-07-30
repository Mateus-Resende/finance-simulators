let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let interest = require('./index')

describe("Juros abusivos", () => {
  let expected = {
    totalValue: 900,
    installmentValue: 100.00,
    length: 12,
    monthlyInterest: 4.73,
    totalValuePaid: 1200,
    totalInterestPaid: 300,
    interestAmountRatio: 0.33
  }

  describe('when missing total value', () => {
    let params = {
      installmentValue: 100,
      length: 12,
      monthlyInterest: 0.0473
    }

    interest.start(params)

    it('calculates the totalValue', () => {
      expect(interest.totalValue).to.equal(expected.totalValue)
    })

    checkOutputParams()
  })

  describe('when missing installment value', () => {
    let params = {
      totalValue: 900,
      length: 12,
      monthlyInterest: 0.0473
    }

    interest.start(params)

    it('calculates the installmentValue', () => {
      expect(interest.installmentValue).to.equal(expected.installmentValue)
    })

    checkOutputParams()
  })

  describe('when missing length', () => {
    let params = {
      totalValue: 900,
      installmentValue: 100,
      monthlyInterest: 0.0473
    }

    interest.start(params)

    it('calculates the length', () => {
      expect(interest.length).to.equal(expected.length)
    })

    checkOutputParams()
  })

  describe('when missing monthly interest', () => {
    let params = {
      totalValue: 900,
      installmentValue: 100,
      length: 12
    }

    interest.start(params)

    it('calculates the monthlyInterest', () => {
      expect(interest.monthlyInterest).to.equal(expected.monthlyInterest)
    })

    checkOutputParams()
  })

  function checkOutputParams () {
    it('calculates total value paid', () => {
      expect(interest.totalValuePaid).to.equal(expected.totalValuePaid)
    })

    it('calculates total interest paid', () => {
      expect(interest.totalInterestPaid).to.equal(expected.totalInterestPaid)
    })

    it('calculates total value and interest ratio', () => {
      expect(interest.interestAmountRatio).to.equal(expected.interestAmountRatio)
    })
  }
})
