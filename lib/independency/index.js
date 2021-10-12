const independency = {}

const CDI = 0.05
const SAVINGS = 0.07
const SELIC = 0.0702
const IPCA = 0.03

independency.start = function (params) {
  this.intendedRevenue = params.intendedRevenue
  this.currentSavings = params.currentSavings
  this.length = params.length
  this.monthlyGrossProfitability = params.monthlyGrossProfitability
  this.incomeTax = params.incomeTax

  this.afterInflationProfitability = 0.04
  this.calculate()
}

independency.calculate = function () {
  this.cdiIndexMonthly = monthlyRate(CDI)
  this.savingsIndexMonthly = monthlyRate(SAVINGS)
  this.selicIndexMonthly = monthlyRate(SELIC)
  this.ipcaIndexMonthly = monthlyRate(IPCA)

  this.monthlyNetProfitability = this.getMonthlyNetProfitability()
  this.acumulatedValue = this.getAcumulatedValue()
  this.monthlySavings = this.getMonthlySavings()
  this.interestProfit = this.getInterestProfit()
}

independency.getAcumulatedValue = function () {
  return +((this.intendedRevenue * 12) / this.afterInflationProfitability).toFixed(2)
}

independency.getMonthlySavings = function () {
  return +((this.acumulatedValue - this.getFutureValue()) * this.monthlyNetProfitability / ((1 + this.monthlyNetProfitability) * (Math.pow(1 + this.monthlyNetProfitability, this.length) - 1))).toFixed(2)
}

independency.getFutureValue = function () {
  return this.currentSavings * Math.pow(1 + this.monthlyNetProfitability, this.length).toFixed(2)
}

independency.getMonthlyNetProfitability = function () {
  return +(this.monthlyGrossProfitability - (this.monthlyGrossProfitability * this.incomeTax) - this.ipcaIndexMonthly).toFixed(4)
}

independency.getInterestProfit = function () {
  return +(this.acumulatedValue - (this.currentSavings + (this.monthlySavings * this.length))).toFixed(2)
}

independency.render = function () {}

const monthlyRate = function (annualRate) {
  return +(Math.pow(1 + annualRate, 1 / 12) - 1).toFixed(4)
}

module.exports = independency
