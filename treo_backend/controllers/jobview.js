const jobposting = require('../model/jobpostschema');

const jobview = async(req, res) => {
    const id = req.params.id
    try {
        const data = await jobposting.find({id});
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

module.exports ={jobview}