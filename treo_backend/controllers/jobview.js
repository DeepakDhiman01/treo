const mongoose = require("mongoose")
const jobposting = require('../model/jobpostschema');

const jobview = async(req, res) => {
    const {_id} = req.body;
    try {
        const data = await jobposting.find({_id});
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports ={jobview}