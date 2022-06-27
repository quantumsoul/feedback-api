const Feedback = require('../models/feedback')
exports.giveFeedback = async (req,res)=>{
    try {
        const feedback = new Feedback(req.body)
        await feedback.save()
        res.status(201).send(feedback)
    } catch (error) {
        res.status(400)
    }
}
exports.getFeedback = async (req,res)=>{
    try {
        const feedback = await Feedback.findOne({orderId:req.query.orderId})
        res.status(200).send(feedback)
    } catch (error) {
        res.status(400)
    }
}