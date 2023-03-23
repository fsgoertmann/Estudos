const restful = require('node-restful')
const mongoose = restful.mongoose

const subItemsSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now},
  _taskId: {type: String, required: true}
})

module.exports = restful.model('SubItems', subItemsSchema)