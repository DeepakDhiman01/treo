const jobposting = require('../model/jobpostschema');

const postjob = async (req, res) => {
  const { location, jobdiscription, jobtittle, payPerHours, category, responsiblity } = req.body;

  try {
    // Create a new job post instance
    const job = new jobposting ({
      location,
      jobdiscription,
      jobtittle,
      payPerHours,
      category,
      responsiblity,
    });

    // Save the job post to the database
    await job.save();

    res.status(200).json({ message: "Data is stored successfully" });
  } catch (error) {
    console.error("Error storing job post:", error);
    res.status(500).json({ message: "Data is not stored in the database", error: error.message });
  }
};

module.exports = {postjob};
