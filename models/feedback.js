const mongoose = require('mongoose')
const feedbackSchema = new mongoose.Schema({
    feedback:{
        type:String,
        req:true
    },
    stars:{
        type:Number,
        req:true
    },
    orderId:{
        type:String,
        req:true
    }
})
const Feedback = mongoose.model("Feedback",feedbackSchema);
module.exports = Feedback;