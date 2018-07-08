let Simulator = {}

Simulator.compoundInterest = require('./lib/compoundInterest')
Simulator.lciPrefixed = require('./lib/lci/prefixed')
Simulator.lciPostfixed = require('./lib/lci/postfixed')
Simulator.cdbPrefixed = require('./lib/cdb/postfixed')
Simulator.cdbPostfixed = require('./lib/cdb/postfixed')

module.exports = Simulator
