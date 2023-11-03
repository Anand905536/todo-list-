const express = require("express")
const userModel = require('../models/user')


module.exports = {
    register: async (req, res, next) => {
        const { name, email, phone, password } = req.body
        const findEmail = await userModel.find({ email: email })
        if (findEmail.length > 0) {
            res.status(200).send({ data: "already registered", status: 0 })
        }
        else {
            const obj = {};
            obj.name = name;
            obj.email = email;
            obj.phone = phone;
            obj.password = password;
            const data = new userModel(obj)
            data.save();
            res.status(200).send({ data: "successfully registered", status: 1 })
        }
    },
    login: async (req, res, next) => {
        const { email, password } = req.body
        const userData = await userModel.find({ email: email })
        console.log(userData)
        if (userData.length > 0 && userData[0].password === password) {
            const userId = userData[0]._id.toString();
            res.status(200).send({ data: "successfully logged in", status: 1, userId: userId })
        }
        else {
            res.status(200).send({ data: "incorrect username or password", status: 0 })
        }
    }
}