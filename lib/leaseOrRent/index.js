let leaseOrRent = {}

leaseOrRent.start = function (params) {
  this.realStateValue = parseFloat(params.realStateValue)
  this.rentValue = parseFloat(params.rentValue)
  this.annualInflation = parseFloat(params.annualInflation)
  this.annualInvestmentProfitability = parseFloat(params.annualInvestmentProfitability)
  this.incomeTaxOnInvestment = parseFloat(params.incomeTaxOnInvestment)
  this.leaseInstallment = parseFloat(params.leaseInstallment)
  this.numberOfInstallments = parseFloat(params.numberOfInstallments)
  this.totalValueOfInstallment = parseFloat(params.totalValueOfInstallment)
  this.initialDeposit = parseFloat(params.initialDeposit)

  this.calculate()
  // this.render()
}

leaseOrRent.calculate = function () {
  this.monthlyProfitability = this.getMonthlyProfitability()
  this.updatedBalance = this.getUpdatedBalance()
  this.futureValueInitial = this.getFutureValueInitial()
  this.monthlyNetProfitability = this.getMonthlyNetProfitability()
  this.netAccruedInvestment = this.getNetAccruedInvestment() // investimento acumulado após 20 anos
  this.estimatedMonthlyAppreciation = this.getEstimatedMonthlyAppreciation()
  this.updatedRealStateValue = this.getUpdatedRealStateValue() // valor do imóvel após 20 anos
  this.leasingPaidValue = this.getLeasingPaidValue()
  this.leaseInvestmentRatio = this.getLeaseInvestmentRatio()
}
// (1 + x) ^ (1 / 12) - 1
leaseOrRent.getMonthlyProfitability = function () {
  return getMonthlyRate(this.annualInvestmentProfitability)
}

leaseOrRent.getUpdatedBalance = function () {
  return this.leaseInstallment - this.rentValue
}

leaseOrRent.getFutureValueInitial = function () {
  return getFutureValue(
    this.initialDeposit,
    this.annualInvestmentProfitability,
    this.numberOfInstallments / 12
  )
}

leaseOrRent.getMonthlyNetProfitability = function () {
  return +(this.monthlyProfitability * (1 - this.incomeTaxOnInvestment)).toFixed(4)
}

leaseOrRent.getNetAccruedInvestment = function () {
  return getFutureValueMonthlyPayments(
    this.initialDeposit,
    this.monthlyNetProfitability,
    this.numberOfInstallments,
    this.updatedBalance
  )
}

leaseOrRent.getEstimatedMonthlyAppreciation = function () {
  return getMonthlyRate(this.annualInflation)
}

leaseOrRent.getUpdatedRealStateValue = function () {
  return getFutureValue(
    this.realStateValue,
    getAnnualRate(this.estimatedMonthlyAppreciation),
    this.numberOfInstallments / 12
  )
}

leaseOrRent.getLeasingPaidValue = function () {
  return this.totalValueOfInstallment + this.futureValueInitial
}

leaseOrRent.getLeaseInvestmentRatio = function () {
  return +(this.netAccruedInvestment / this.updatedRealStateValue).toFixed(2)
}

// F = P.(1 + i)^n
let getFutureValue = function (amount, rate, length) {
  return +(amount * (Math.pow(1 + rate, length))).toFixed(2)
}

// F = P.(1+i)^n + M.[(1+i)^n - 1]/i
let getFutureValueMonthlyPayments = function (amount, rate, length, payment) {
  return +(
    getFutureValue(amount, rate, length) +
    payment * ((Math.pow(1 + rate, length) - 1) / rate)
  ).toFixed(2)
}

// (1 + r)^(1/12) - 1
let getMonthlyRate = function (annualRate) {
  return +(Math.pow(1 + annualRate, 1 / 12) - 1).toFixed(6)
}

// (1 + r)^12 - 1
let getAnnualRate = function (monthlyRate) {
  return +(Math.pow(1 + monthlyRate, 12) - 1).toFixed(6)
}

leaseOrRent.render = function () {
}



module.exports = leaseOrRent
