const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })
BillingCycle.after('post', errorHandler)
    .after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((err, value) => {
        if (err) {
            res.status(500).json({ erros: [err] })
        } else {
            res.json({ value })
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{
        $project: { _id: "$userId", credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
        $group: { _id: "$_id", credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
    }, {
        $project: { _id: 1, credit: 1, debt: 1 }
    }], (err, result) => {
        if (err) {
            res.status(500).json({ erros: [err] })
        } else {
            res.json(result || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle