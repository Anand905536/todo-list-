const mongoose=require("mongoose");

const taskSchema=mongoose.Schema(
    {
        taskName:{

        },
        taskDetail:{

        },
        isCompleted:{

        }
    },
    {timeStamp:true}
)

const task = mongoose.model("task", taskSchema);
module.exports=task
