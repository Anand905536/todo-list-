const express = require("express")
const taskModel = require('../models/task')


module.exports = {
    getTask: async (req, res, next) => {
        const { userId } = req.body
        const allData = await taskModel.find({ userId: userId })
        res.status(200).send({ data: allData })
    },
    addTask: async (req, res, next) => {
        const { userId, taskName, taskDetail } = req.body
        const obj = {}
        obj.userId = userId
        obj.taskName = taskName
        obj.taskDetail = taskDetail
        obj.isCompleted = false
        const data = new taskModel(obj)
        data.save();
        res.status(200).send({ "msg": "task added", "status": 1 })
    },
    deleteTask: async (req, res, next) => {
        const { userId, taskId } = req.body;
        await taskModel.findOneAndDelete({ userId, _id: taskId });
        res.status(200).send({ status: 1 })
    },
    editTask: async (req, res, next) => {
        const { isCompleted, taskName, taskDetail, userId, taskId } = req.body;

        // console.log(req.body)
        await taskModel.findOneAndUpdate(
            { userId, _id: taskId },
            { $set: { isCompleted, taskName, taskDetail } },
            { new: true } 
        );
        res.status(200).send({ statuus: 1 })
    }

}