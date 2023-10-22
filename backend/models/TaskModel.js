const mongoose = require ("mongoose")
const taskSchema= new mongoose.Schema ({
    title: {
        type: String,
        required: true
      },
      tag: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model("task", taskSchema)