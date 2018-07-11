const calculator = require("business-days-calculator");
const calendar = require("holidays-calendar-brazil");
calculator.SetCalendar(calendar);

let lci = {}

lci.start = function (params) {
  this.initial = params.initial
  this.startDate = params.startDate
  this.endDate = params.endDate
  this.cdiIndex = params.cdiIndex
  this.cdiPercent = params.cdiPercent

  this.calculate()
}

lci.calculate = function () {
  this.continuousDays = calculator.ContinuousDaysBetween(this.startDate, this.endDate)
  this.workingDays = calculator.WorkingDaysBetween(this.startDate, this.endDate) + 1
  this.cdiIndexPerDay = this.getCdiIndexPerDay()
  this.profitabilityPerDay = this.getProfitabilityPerDay()
  this.profitabilityInPeriod = this.getProfitabilityInPeriod()
  this.profitabilityPerMonth = this.getProfitabilityPerMonth()
  this.profitabilityPerYear = this.getProfitabilityPerYear()
  this.updatedInvestedAmount = this.getUpdatedInvestedAmount()
  this.netProfit = this.getNetProfit()
  this.netProfitability = this.getNetProfitability()
}

lci.getCdiIndexPerDay = function () {
  return +(Math.pow(1 + (this.cdiIndex / 100), 1 / this.workingDays) - 1).toFixed(8)
}

lci.getProfitabilityPerDay = function () {
  return +(this.cdiIndexPerDay * (this.cdiPercent / 100)).toFixed(8)
}

lci.getProfitabilityInPeriod = function () {
  return +(Math.pow(1 + this.profitabilityPerDay, this.workingDays) - 1).toFixed(4)
}

lci.getProfitabilityPerMonth = function () {
  return +(Math.pow(1 + this.profitabilityInPeriod, 21 / this.workingDays) - 1).toFixed(4)
}

lci.getProfitabilityPerYear = function () {
  return  +(Math.pow(1 + this.profitabilityInPeriod, 252 / this.workingDays) - 1).toFixed(4)
}

lci.getUpdatedInvestedAmount = function () {
  return +(this.initial * (1 + this.profitabilityInPeriod)).toFixed(2)
}

lci.getNetProfit = function () {
  return +(this.updatedInvestedAmount - this.initial).toFixed(2)
}

lci.getNetProfitability = function () {
  return +(this.netProfit / this.initial).toFixed(4)
}


lci.render = function () {}


module.exports = lci
