module.exports = {
  calculate: function (params) {
    const { installmentValue, length, totalValue, monthlyInterest } = calculateMissingValue(params)
    const totalValuePaid = getTotalValuePaid(installmentValue, length)
    const totalInterestPaid = getTotalInterestPaid(totalValuePaid, totalValue)
    const interestAmountRatio = getinterestAmountRatio(totalInterestPaid, totalValue)

    return {
      totalValue,
      installmentValue,
      length,
      monthlyInterest,
      totalValuePaid,
      totalInterestPaid,
      interestAmountRatio
    }
  }
}

const calculateMissingValue = function ({ totalValue, installmentValue, length, monthlyInterest }) {
  if (!totalValue) {
    totalValue = getTotalValue(installmentValue, monthlyInterest, length)
  } else if (!installmentValue) {
    installmentValue = getInstallmentValue(totalValue, monthlyInterest, length)
  } else if (!length) {
    length = getLength(monthlyInterest, totalValue, installmentValue)
  } else if (!monthlyInterest) {
    monthlyInterest = getMonthlyInterest(installmentValue, totalValue, length)
  }

  return {
    totalValue,
    installmentValue,
    length,
    monthlyInterest
  }
}

// PMT = mensalidade; r = taxa; n = número de pagamentos
// PV = PMT * ((1 - (1 / (1 + r) ^ n)) / r)
const getTotalValue = function (installmentValue, monthlyInterest, length) {
  return +(installmentValue * ((1 - (1 / Math.pow(1 + monthlyInterest, length))) / monthlyInterest)).toFixed(2)
}

// P = total; r = taxa; n = número de pagamentos
// PMT = P * r / (1 - (1 / (1 + r)^n))
const getInstallmentValue = function (totalValue, monthlyInterest, length) {
  return +(totalValue * monthlyInterest / (1 - (1 / Math.pow(1 + monthlyInterest, length)))).toFixed(2)
}

// r = taxa; P = total; M = mensal
// NPER = -log(1 - rP / M) / (log(1 + i))
const getLength = function (monthlyInterest, totalValue, installmentValue) {
  return Math.ceil((-Math.log(1 - (monthlyInterest * totalValue / installmentValue)) / Math.log(1 + monthlyInterest)).toFixed(2))
}

// trial and error
// PMT / P = r / (1 - (1 / (1 + r)^n))
// solve PMT / P first, then try to find r that will match the value by 0.00001
const getMonthlyInterest = function (installmentValue, totalValue, length) {
  const a = installmentValue / totalValue
  let b = 0.04
  const stoplight = 0.00001

  while (true) {
    const x = Math.pow(1 + b, length)
    const c = (b * x) / (x - 1)
    const difference = Math.abs(a - c)
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

  return +(b).toFixed(4)
}

const getTotalValuePaid = function (installmentValue, length) {
  return +(installmentValue * length).toFixed(2)
}

const getTotalInterestPaid = function (totalValuePaid, totalValue) {
  return +(totalValuePaid - totalValue).toFixed(2)
}

const getinterestAmountRatio = function (totalInterestPaid, totalValue) {
  return +(totalInterestPaid / totalValue).toFixed(2)
}
