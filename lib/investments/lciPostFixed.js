const calculator = require('business-days-calculator')
const calendar = require('holidays-calendar-brazil')
calculator.SetCalendar(calendar)

const lciPostFixed = {}

lciPostFixed.start = function (params) {
  this.initial = params.initial
  this.length = params.length
  this.cdiIndex = params.cdiIndex
  this.cdiPercent = params.cdiPercent

  this.calculate()
}

lciPostFixed.calculate = function () {
  this.continuousDays = this.continuousDays = (this.length / 12 * 365)
  this.workingDays = this.getWorkingDays()
  this.cdiIndexPerDay = this.getCdiIndexPerDay()
  this.profitabilityPerDay = this.getProfitabilityPerDay()
  this.profitabilityInPeriod = this.getProfitabilityInPeriod()
  this.profitabilityPerMonth = this.getProfitabilityPerMonth()
  this.profitabilityPerYear = this.getProfitabilityPerYear()
  this.updatedInvestedAmount = this.getUpdatedInvestedAmount()
  this.netProfit = this.getNetProfit()
  this.netProfitability = this.getNetProfitability()
}

lciPostFixed.getWorkingDays = function () {
  return Math.ceil(this.continuousDays * 252 / 365)
}

lciPostFixed.getCdiIndexPerDay = function () {
  return +(Math.pow(1 + (this.cdiIndex / 100), 1 / 252) - 1).toFixed(8)
}

lciPostFixed.getProfitabilityPerDay = function () {
  return +(this.cdiIndexPerDay * (this.cdiPercent / 100)).toFixed(8)
}

lciPostFixed.getProfitabilityInPeriod = function () {
  return +(Math.pow(1 + this.profitabilityPerDay, this.workingDays) - 1).toFixed(4)
}

lciPostFixed.getProfitabilityPerMonth = function () {
  return +(Math.pow(1 + this.profitabilityInPeriod, 21 / this.workingDays) - 1).toFixed(4)
}

lciPostFixed.getProfitabilityPerYear = function () {
  return +(Math.pow(1 + this.profitabilityInPeriod, 252 / this.workingDays) - 1).toFixed(4)
}

lciPostFixed.getUpdatedInvestedAmount = function () {
  return +(this.initial * (1 + this.profitabilityInPeriod)).toFixed(2)
}

lciPostFixed.getNetProfit = function () {
  return +(this.updatedInvestedAmount - this.initial).toFixed(2)
}

lciPostFixed.getNetProfitability = function () {
  return +(this.netProfit / this.initial).toFixed(4)
}

lciPostFixed.render = function () {}

module.exports = lciPostFixed
