const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        taskName: {
            type: String,
            required: true
        },
        taskDetail: {
            type: String,
            required: true
        },
        isCompleted: {
           type:Boolean,
           default:false
        }
    },
    { timeStamp: true }
)

const task = mongoose.model("task", taskSchema);
module.exports = task
