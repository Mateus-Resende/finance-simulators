const savingsAccount = {}

savingsAccount.start = function (params) {
  this.length = params.length
  this.initialAmount = params.initialAmount
  this.interestRate = +(Math.pow(1 + (params.interestRate * 0.7 / 100), 1 / 12) - 1).toFixed(4)
}

savingsAccount.calculate = function () {
  this.accruedAmount = this.getAccruedAmount()
}

savingsAccount.getAccruedAmount = function () {
  return +(this.initialAmount * (Math.pow(1 + this.interestRate, this.length))).toFixed(2)
}

savingsAccount.render = function () {

}

module.exports = savingsAccount
