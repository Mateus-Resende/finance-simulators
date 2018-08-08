let leaseOrRent = {}

leaseOrRent.start = function (params) {
  this.realStateValue = params.realStateValue
  this.initialDeposit = params.initialDeposit
  this.length = params.length // prazo
  this.annualInterestRate = params.annualInterestRate
  this.profitPercent = params.profitPercent // rentabilidade
  this.currentInstallment = 1

  this.totalInterest = 0
  this.totalAmortization = 0
  this.totalPaidAmount = 0
  this.totalInvested = 0
  this.installments = []

  this.calculate()
  this.render()
}

leaseOrRent.calculate = function () {
  this.monthlyInterestRate = this.getMonthlyInterestRate()
  this.leaseInitialBalance = this.getLeaseInitialBalance() // financiamento
  this.rentValue = this.getRentValue()
  this.interestValue = this.getInitialInterestValue()
  this.currentBalance = this.getInitialBalance()
  this.amortization = this.getAmortization()
  this.installmentValue = this.getInstallmentValue()
  this.maxInstallmentValue = this.installmentValue
  this.balanceDue = this.getBalanceDue()
  this.installmentForInvestment = this.getInstallmentForInvestment()
  this.installments.push(this.installmentForInvestment)

  this.totalInterest += this.interestValue // total de juros
  this.totalAmortization += this.amortization
  this.totalInvested += this.getTotalInvested() // terei poupado

  this.calculateSacTable()
  this.calculateInvestedFV()

  this.updatedInitialDeposit = this.getUpdatedInitialDeposit() // além da entrada com rendimentos
  this.leasingTotalPaid = this.getLeasingTotal() // total pago no financiamento
  this.updatedInvestedAmount = this.getUpdatedInvestedAmount() // meus investimentos

  this.leasingPaidRatio = this.getLeasingPaidRatio() // nath, no financiamento, pagaria quase

  this.updatedRealStateValue = this.getUpdatedRealStateValue() // o imóvel custará
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
  return +(this.rentValue * 1.0025).toFixed(2)
}

leaseOrRent.getTotalInvested = function () {
  return this.totalInvested * (1 + this.profitPercent) + this.installmentValue
}

leaseOrRent.calculateSacTable = function () {
  for (let i = this.length; i > 1; i--) {
    this.currentBalance = this.balanceDue
    this.interestValue = this.getCurrentInterestValue()
    this.currentBalance = this.getCurrentBalance()
    this.installmentValue = this.getInstallmentValue()
    this.balanceDue = this.getBalanceDue()
    this.rentValue = this.getUpdatedRent()
    this.installmentForInvestment = this.getInstallmentForInvestment()

    this.totalInterest += this.interestValue
    this.totalAmortization += this.amortization

    if (this.installmentForInvestment > 0) {
      this.installments.push(this.installmentForInvestment)
    }
  }

  this.totalInterest = +this.totalInterest.toFixed(2)
  this.totalAmortization = +this.totalAmortization.toFixed(2)
  this.totalInvested = +this.totalInvested.toFixed(2)
}

// 3300 * ((1 + 0,005)^360) + 3000*((((1 + 0,005)^360) - 1) / 0,005)
leaseOrRent.calculateInvestedFV = function () {
  let i = this.length
  this.totalInvested = this.maxInstallmentValue * Math.pow(1 + this.profitPercent, i)
  for (let j in this.installments) {
    i -= 1
    this.totalInvested += this.installments[j] * Math.pow(1 + this.profitPercent, i)
  }
  this.totalInvested = +(this.totalInvested * (Math.pow(1 + this.profitPercent, i))).toFixed(2)
}

leaseOrRent.getUpdatedInitialDeposit = function () {
  return +(this.initialDeposit * (Math.pow(1 + this.profitPercent, this.length))).toFixed(2)
}

leaseOrRent.getUpdatedInvestedAmount = function () {
  return this.totalInvested + this.updatedInitialDeposit
}

leaseOrRent.getLeasingTotal = function () {
  return this.realStateValue + this.totalInterest
}

leaseOrRent.getUpdatedRealStateValue = function () {
  return +(this.realStateValue * (Math.pow(1.0025, this.length))).toFixed(2)
}

leaseOrRent.getLeasingPaidRatio = function () {
  return +(this.leasingTotalPaid / this.realStateValue).toFixed(1)
}

leaseOrRent.render = function () {

}

module.exports = leaseOrRent
