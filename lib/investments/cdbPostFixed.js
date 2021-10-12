const calculator = require('business-days-calculator')
const calendar = require('holidays-calendar-brazil')
calculator.SetCalendar(calendar)

const cdbPostFixed = {}

cdbPostFixed.calculate = function ({ initial, startDate, endDate, cdiIndex, cdiPercent }) {
  const continuousDays = calculator.ContinuousDaysBetween(startDate, endDate)
  const workingDays = calculator.WorkingDaysBetween(startDate, endDate)
  const cdiPerWorkingDays = getCdiPerWorkingDays(cdiIndex)
  const grossProfitability = getGrossProfitability(cdiPerWorkingDays, cdiPercent)
  const grossProfitabilityInPeriod = getGrossProfitabilityInPeriod(grossProfitability, workingDays)
  const incomeTaxOnProfitability = getIncomeTaxOnProfitability(continuousDays)
  const netProfitabilityInPeriod = getNetProfitabilityInPeriod(grossProfitabilityInPeriod, incomeTaxOnProfitability)
  const netProfitabilityPerDay = getNetProfitabilityPerDay(netProfitabilityInPeriod, workingDays)
  const netProfitabilityPerMonth = getNetProfitabilityPerMonth(netProfitabilityInPeriod, workingDays)
  const netProfitabilityPerYear = getNetProfitabilityPerYear(netProfitabilityInPeriod, workingDays)
  const netCdiPercent = getNetCdiPercent(netProfitabilityPerDay, cdiPerWorkingDays)
  const updatedInvestedAmount = getUpdatedInvestedAmount(initial, grossProfitabilityInPeriod)
  const incomeTaxOnProfit = getIncomeTaxOnProfit(updatedInvestedAmount, initial, incomeTaxOnProfitability)
  const netAmountOfInvestment = getNetAmountOfInvestment(updatedInvestedAmount, incomeTaxOnProfit)
  const netProfit = getNetProfit(netAmountOfInvestment, initial)
  const percentNetProfit = getPercentNetProfit(netProfit, initial)

  return {
    continuousDays,
    workingDays,
    cdiPerWorkingDays,
    grossProfitability,
    grossProfitabilityInPeriod,
    incomeTaxOnProfitability,
    netProfitabilityInPeriod,
    netProfitabilityPerDay,
    netProfitabilityPerMonth,
    netProfitabilityPerYear,
    netCdiPercent,
    updatedInvestedAmount,
    incomeTaxOnProfit,
    netAmountOfInvestment,
    netProfit,
    percentNetProfit
  }
}

const getCdiPerWorkingDays = function (cdiIndex) {
  return +(Math.pow(1 + (cdiIndex / 100), 1 / 252) - 1).toFixed(6)
}

const getGrossProfitability = function (cdiPerWorkingDays, cdiPercent) {
  return +(parseFloat(cdiPerWorkingDays) * parseFloat(cdiPercent) / 100).toFixed(6)
}

const getGrossProfitabilityInPeriod = function (grossProfitability, workingDays) {
  return +(Math.pow((1 + grossProfitability), workingDays) - 1).toFixed(4)
}

const getIncomeTaxOnProfitability = function (continuousDays) {
  let incomeTax

  if (continuousDays > 720) {
    incomeTax = 0.15
  } else if (continuousDays > 360) {
    incomeTax = 0.175
  } else if (continuousDays > 180) {
    incomeTax = 0.2
  } else {
    incomeTax = 0.225
  }

  return incomeTax
}

const getNetProfitabilityInPeriod = function (grossProfitabilityInPeriod, incomeTaxOnProfitability) {
  return +(grossProfitabilityInPeriod * (1 - incomeTaxOnProfitability)).toFixed(4)
}

const getNetProfitabilityPerDay = function (netProfitabilityInPeriod, workingDays) {
  return +(Math.pow(1 + netProfitabilityInPeriod, 1 / workingDays) - 1).toFixed(6)
}

const getNetProfitabilityPerMonth = function (netProfitabilityInPeriod, workingDays) {
  return +(Math.pow(1 + netProfitabilityInPeriod, 21 / workingDays) - 1).toFixed(4)
}

const getNetProfitabilityPerYear = function (netProfitabilityInPeriod, workingDays) {
  return +(Math.pow(1 + netProfitabilityInPeriod, 252 / workingDays) - 1).toFixed(4)
}

const getNetCdiPercent = function (netProfitabilityPerDay, cdiPerWorkingDays) {
  return +(netProfitabilityPerDay / cdiPerWorkingDays).toFixed(4)
}

const getUpdatedInvestedAmount = function (initial, grossProfitabilityInPeriod) {
  return +(initial * (1 + grossProfitabilityInPeriod)).toFixed(2)
}

const getIncomeTaxOnProfit = function (updatedInvestedAmount, initial, incomeTaxOnProfitability) {
  return +((updatedInvestedAmount - initial) * incomeTaxOnProfitability).toFixed(2)
}

const getNetAmountOfInvestment = function (updatedInvestedAmount, incomeTaxOnProfit) {
  return +(updatedInvestedAmount - incomeTaxOnProfit).toFixed(2)
}

const getNetProfit = function (netAmountOfInvestment, initial) {
  return +(netAmountOfInvestment - initial).toFixed(2)
}

const getPercentNetProfit = function (netProfit, initial) {
  return +(netProfit / initial).toFixed(4)
}

module.exports = cdbPostFixed
