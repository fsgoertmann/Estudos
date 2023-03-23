const SubItems = require('./subItems')

SubItems.methods(['get', 'post', 'put', 'delete'])
SubItems.updateOptions({new: true, runValidators:true})

module.exports = SubItems