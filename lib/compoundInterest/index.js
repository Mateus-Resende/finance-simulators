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
    accruedEarnings: accrued,
    monthlyInterest: profitability * 100
  }
}

const totalInvestment = function (initial, monthly, period) {
  return initial + (monthly * period)
}

const totalEarning = function (total, accrued) {
  return accrued - total
}

// 1000 * (1,0064) ^2 + 500 *((1,0064)^2 - 1) / 2
const accruedEarnings = function (initial, monthly, profitability, period) {
  let total = initial * Math.pow(1 + profitability, period - 1)
  for (let i = period; i > 0; i--) {
    total += monthly * Math.pow(1 + profitability, i)
  }
  return total
}

const monthlyInterest = function (interest, interestIsMonthly) {
  let value = interestIsMonthly ? interest : Math.pow(1 + interest, 1 / 12) - 1
  return +(value).toFixed(4)
}

module.exports = compoundInterest
