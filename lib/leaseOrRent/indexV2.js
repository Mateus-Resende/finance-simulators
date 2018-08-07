let leaseOrRent = {}

leaseOrRent.start = function (params) {
  this.realStateValue = params.realStateValue
  this.initialDeposit = params.initialDeposit
  this.length = params.length
  this.annualInterestRate = params.annualInterestRate
  this.profitPercent = params.profitPercent
  this.currentInstallment = 1

  this.totalInterest = 0
  this.totalAmortization = 0
  this.totalPaidAmount = 0
  this.totalInvested = 0

  this.calculate()
  this.render()
}

leaseOrRent.calculate = function () {
  this.monthlyInterestRate = this.getMonthlyInterestRate()
  this.leaseInitialBalance = this.getLeaseInitialBalance()
  this.rentValue = this.getRentValue()
  this.interestValue = this.getInitialInterestValue()
  this.currentBalance = this.getInitialBalance()
  this.amortization = this.getAmortization()
  this.installmentValue = this.getInstallmentValue()
  this.maxInstallmentValue = this.installmentValue
  this.balanceDue = this.getBalanceDue()
  this.installmentForInvestment = this.getInstallmentForInvestment()

  this.totalInterest += this.interestValue
  this.totalAmortization += this.amortization
  this.totalPaidAmount += this.installmentValue
  this.totalInvested += this.getTotalInvested()

  this.calculateSacTable()
}

leaseOrRent.getLeaseInitialBalance = function () {
  return this.realStateValue - this.initialDeposit
}

leaseOrRent.getMonthlyInterestRate = function () {
  return +(Math.pow(1 + this.annualInterestRate, 1 / 12) - 1).toFixed(8)
}

leaseOrRent.getRentValue = function () {
  return +(this.realStateValue * 0.003).toFixed(2)
}

leaseOrRent.getInitialInterestValue = function () {
  return +(this.leaseInitialBalance * this.monthlyInterestRate).toFixed(2)
}

leaseOrRent.getCurrentInterestValue = function () {
  return +(this.currentBalance * this.monthlyInterestRate).toFixed(2)
}

leaseOrRent.getInitialBalance = function () {
  return +(this.leaseInitialBalance + this.interestValue).toFixed(2)
}

leaseOrRent.getCurrentBalance = function () {
  return +(this.currentBalance + this.interestValue).toFixed(2)
}

leaseOrRent.getAmortization = function () {
  return +(this.leaseInitialBalance / this.length).toFixed(2)
}

leaseOrRent.getInstallmentValue = function () {
  return this.interestValue + this.amortization
}

leaseOrRent.getBalanceDue = function () {
  return +(this.currentBalance - this.installmentValue).toFixed(2)
}

leaseOrRent.getInstallmentForInvestment = function () {
  return +(this.installmentValue - this.rentValue).toFixed(2)
}

leaseOrRent.getUpdatedRent = function () {
  return +(this.rent * 1.0025).toFixed(2)
}

leaseOrRent.getTotalInvested = function () {
  return this.totalInvested * (1 + this.profitPercent) + this.installmentValue
}

leaseOrRent.calculateSacTable = function () {
  for(let i = 1; i < this.length; i++) {
    this.currentBalance = this.balanceDue
    this.interestValue = this.getCurrentInterestValue()
    this.currentBalance = this.getCurrentBalance()
    this.amortization = this.getAmortization()
    this.installmentValue = this.getInstallmentValue()
    this.balanceDue = this.getBalanceDue()
    this.rent = this.getUpdatedRent()
    this.installmentForInvestment = this.getInstallmentForInvestment()


    this.totalInterest += this.interestValue
    this.totalAmortization += this.amortization
    this.totalPaidAmount += this.installmentValue

    if (this.installmentForInvestment > 0) {
      this.totalInvested = this.getTotalInvested()
    }
  }

  this.totalInterest = +this.totalInterest.toFixed(2)
  this.totalAmortization = +this.totalAmortization.toFixed(2)
  this.totalPaidAmount = +this.totalPaidAmount.toFixed(2)
  this.totalInvested = +this.totalInvested.toFixed(2)
}

leaseOrRent.render = function () {

}

module.exports = leaseOrRent
