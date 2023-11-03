const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},
    { timeSpent: true }
)
const User = mongoose.model("User", userModel);
module.exports = User