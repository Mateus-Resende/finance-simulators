// t = (1/r)(total/amount - 1)
// r = (1/t)(total/amount - 1)

let interest = {}

interest.start = function (params) {
  this.totalValue = params.totalValue
  this.installmentValue = params.installmentValue
  this.length = params.length
  this.monthlyInterest = params.monthlyInterest

  this.calculate()
  this.render()
}

interest.calculate = function () {
  this.calculateMissingValue()

  this.totalValuePaid = this.getTotalValuePaid()
  this.totalInterestPaid = this.getTotalInterestPaid()
  this.interestAmountRatio = this.getinterestAmountRatio()
}

interest.calculateMissingValue = function () {
  if (!this.totalValue) {
    this.totalValue = this.getTotalValue()

  } else if (!this.installmentValue) {
    this.installmentValue = this.getInstallmentValue()

  } else if (!this.length) {
    this.length = this.getLength()

  } else if (!this.monthlyInterest) {
    this.monthlyInterest = this.getMonthlyInterest()
  }
}

// PMT = mensalidade; r = taxa; n = número de pagamentos
// PV = PMT * ((1 - (1 / (1 + r) ^ n)) / r))
interest.getTotalValue = function () {
  return this.installmentValue * (1 - (1 / Math.pow(1 + this.interest, this.length)) / this.interest)
}

// P = total; r = taxa; n = número de pagamentos
// PMT = P * r / (1 - (1 / (1 + r)^n))
interest.getInstallmentValue = function () {
  return this.totalValue * this.interest / (1 - (1 / Math.pow(1 + this.interest, this.length)))
}

// r = taxa; P = total; M = mensal
// NPER = -log(1 - rP / M) / (log(1 + i))
interest.getLength = function () {
  return Math.ceil(-Math.log(1 - (this.monthlyInterest * this.totalValue / this.installmentValue)) / Math.log(1 + this.monthlyInterest))
}

interest.getMonthlyInterest = function () {
  let a = this.installmentValue / this.totalValue
  let b = 0.03
  let stoplight = 0.00001

  while(true) {
    let x = Math.pow(1 + b, this.length)
    let c = (b * x) / (x - 1)
    let difference = Math.abs(a - c)
    if (difference > stoplight) {
      if (a > c) {
        b += difference / 2
      } else {
        b -= difference / 2
      }
    } else {
      break
    }
  }

  return +(b * 100).toFixed(2)
}

interest.getTotalValuePaid = function ()  {
  return +(this.installmentValue * this.length).toFixed(2)
}

interest.getTotalInterestPaid = function ()  {
  return +(this.totalValuePaid - this.totalValue).toFixed(2)
}

interest.getinterestAmountRatio = function ()  {
  return +(this.totalInterestPaid / this.totalValue).toFixed(2)
}

interest.render = function () {}

module.exports = interest
