const jobposting = require('../model/jobpostschema');




const showjobs=  async(req,res)=>{

try {
    const jobs = await jobposting.find()

    res.status(200).json( jobs)
} catch (error) {
     console.log("this is a err" , error)
}
}

module.exports = {showjobs}