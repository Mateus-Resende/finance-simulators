const AbusiveInterests = require('./abusiveInterests/index')
const CompoundInterest = require('./compoundInterest/index')
const FinancialIndependency = require('./independency/index')
const CdbPostFixed = require('./investments/cdbPostFixed')
const LciPostFixed = require('./investments/lciPostFixed')
const SavingsAccount = require('./investments/savingsAccount')
const LeaseOrRent = require('./leaseOrRent/index')

const FinancialSimulators = {}

FinancialSimulators.AbusiveInterests = AbusiveInterests
FinancialSimulators.CompoundInterest = CompoundInterest
FinancialSimulators.FinancialIndependency = FinancialIndependency
FinancialSimulators.CdbPostFixed = CdbPostFixed
FinancialSimulators.LciPostFixed = LciPostFixed
FinancialSimulators.SavingsAccount = SavingsAccount
FinancialSimulators.LeaseOrRent = LeaseOrRent

module.exports = FinancialSimulators
