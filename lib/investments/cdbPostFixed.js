const calculator = require('business-days-calculator')
const calendar = require('holidays-calendar-brazil')
calculator.SetCalendar(calendar)

const cdbPostFixed = {}

cdbPostFixed.start = function (params) {
  this.initial = params.initial
  this.startDate = params.startDate
  this.endDate = params.endDate
  this.cdiIndex = params.cdiIndex
  this.cdiPercent = params.cdiPercent

  this.calculate()
  this.render()
}

cdbPostFixed.calculate = function () {
  this.continuousDays = calculator.ContinuousDaysBetween(this.startDate, this.endDate)
  this.workingDays = calculator.WorkingDaysBetween(this.startDate, this.endDate) + 1
  this.cdiPerWorkingDays = this.getCdiPerWorkingDays()
  this.grossProfitability = this.getGrossProfitability()
  this.grossProfitabilityInPeriod = this.getGrossProfitabilityInPeriod()
  this.incomeTaxOnProfitability = this.getIncomeTaxOnProfitability()
  this.netProfitabilityInPeriod = this.getNetProfitabilityInPeriod()
  this.netProfitabilityPerDay = this.getNetProfitabilityPerDay()
  this.netProfitabilityPerMonth = this.getNetProfitabilityPerMonth()
  this.netProfitabilityPerYear = this.getNetProfitabilityPerYear()
  this.netCdiPercent = this.getNetCdiPercent()
  this.updatedInvestedAmount = this.getUpdatedInvestedAmount()
  this.incomeTaxOnProfit = this.getIncomeTaxOnProfit()
  this.netAmountOfInvestment = this.getNetAmountOfInvestment()
  this.netProfit = this.getNetProfit()
  this.percentNetProfit = this.getPercentNetProfit()
}

cdbPostFixed.getCdiPerWorkingDays = function () {
  return +(Math.pow(1 + (this.cdiIndex / 100), 1 / 252) - 1).toFixed(6)
}

cdbPostFixed.getGrossProfitability = function () {
  return +(parseFloat(this.cdiPerWorkingDays) * parseFloat(this.cdiPercent) / 100).toFixed(6)
}

cdbPostFixed.getGrossProfitabilityInPeriod = function () {
  return +(Math.pow((1 + this.grossProfitability), this.workingDays) - 1).toFixed(6)
}

cdbPostFixed.getIncomeTaxOnProfitability = function () {
  let incomeTax

  if (this.continuousDays > 720) {
    incomeTax = 0.15
  } else if (this.continuousDays > 360) {
    incomeTax = 0.175
  } else if (this.continuousDays > 180) {
    incomeTax = 0.2
  } else {
    incomeTax = 0.225
  }

  return incomeTax
}

cdbPostFixed.getNetProfitabilityInPeriod = function () {
  return +(this.grossProfitabilityInPeriod * (1 - this.incomeTaxOnProfitability)).toFixed(4)
}

cdbPostFixed.getNetProfitabilityPerDay = function () {
  return +(Math.pow(1 + this.netProfitabilityInPeriod, 1 / this.workingDays) - 1).toFixed(6)
}

cdbPostFixed.getNetProfitabilityPerMonth = function () {
  return +(Math.pow(1 + this.netProfitabilityInPeriod, 21 / this.workingDays) - 1).toFixed(6)
}

cdbPostFixed.getNetProfitabilityPerYear = function () {
  return +(Math.pow(1 + this.netProfitabilityInPeriod, 252 / this.workingDays) - 1).toFixed(6)
}

cdbPostFixed.getNetCdiPercent = function () {
  return +(this.netProfitabilityPerDay / this.cdiPerWorkingDays).toFixed(6)
}

cdbPostFixed.getUpdatedInvestedAmount = function () {
  return this.initial * (1 + this.grossProfitabilityInPeriod)
}

cdbPostFixed.getIncomeTaxOnProfit = function () {
  return +((this.updatedInvestedAmount - this.initial) * this.incomeTaxOnProfitability).toFixed(2)
}

cdbPostFixed.getNetAmountOfInvestment = function () {
  return +(this.updatedInvestedAmount - this.incomeTaxOnProfit).toFixed(2)
}

cdbPostFixed.getNetProfit = function () {
  return +(this.netAmountOfInvestment - this.initial).toFixed(2)
}

cdbPostFixed.getPercentNetProfit = function () {
  return +(this.netProfit / this.initial).toFixed(4)
}

cdbPostFixed.render = function () {
  // console.log(this);

  // $("#updatedInvestedAmount").text(this.updatedInvestedAmount)
  // $("#incomeTaxOnProfit").text(this.incomeTaxOnProfit)
  // $("#netAmountOfInvestment").text(this.netAmountOfInvestment)
  // $("#netProfit").text(this.netProfit)
  // $("#percentNetProfit").text(this.percentNetProfit)

  // this.continuousDays
  // this.workingDays
  // this.cdiPerWorkingDays
  // this.grossProfitability
  // this.grossProfitabilityInPeriod
  // this.incomeTaxOnProfitability
  // this.netProfitabilityInPeriod
  // this.netProfitabilityPerDay
  // this.netProfitabilityPerMonth
  // this.netProfitabilityPerYear
  // this.netCdiPercent
  // this.updatedInvestedAmount
  // this.incomeTaxOnProfit
  // this.netAmountOfInvestment
  // this.netProfit
  // this.percentNetProfit
}

module.exports = cdbPostFixed
