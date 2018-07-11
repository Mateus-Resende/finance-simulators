let compoundInterest = {}

compoundInterest.calculate = function (initial, monthly, profitability, period, interestIsMonthly = true) {
  profitability = monthlyInterest(profitability / 100, interestIsMonthly)
  initial = parseFloat(initial)
  monthly = parseFloat(monthly)
  let total = totalInvestment(initial, monthly, period)
  let accrued = accruedEarnings(initial, monthly, profitability, period)

  return {
    totalInvestment: total,
    totalEarning: totalEarning(total, accrued),
    accruedEarnings: accrued
  }
}

const totalInvestment = function (initial, monthly, period) {
  return (initial + (monthly * period)).toFixed(2)
}

const totalEarning = function (total, accrued) {
  return (accrued - total).toFixed(2)
}

const accruedEarnings = function (initial, monthly, profitability, period) {
  let total = initial * Math.pow(1 + profitability, period)
  for (let i = period - 1; i >= 0; i--) {
    total += monthly * Math.pow(1 + profitability, i)
  }
  return total.toFixed(2)
}

const monthlyInterest = function (interest, interestIsMonthly) {
  let value = interestIsMonthly ? interest : Math.pow(1 + parseFloat(interest), 1 / 12) - 1
  return +(value).toFixed(4)
}

module.exports = compoundInterest
