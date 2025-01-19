
const jobposting = require('../model/jobpostschema');

const postjob = async (req, res) => {
  const {
    location,
    jobdiscription,
    jobtittle,
    // payPerHours,
    category,
    aboutus,
     starttime,
     startdate,
    // wantdate,
    // wanttime,
    age,
    days,
    gender,
  } = req.body;

  // Validate required fields
  if (
    !location ||
    !jobdiscription ||
    !jobtittle ||
    // !payPerHours ||
    !category ||
    !aboutus ||
    !avilabletime ||
    !avilabledate ||
    // !wantdate ||
    // !wanttime ||
    !age ||
    !gender||
    !days
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required. Please provide complete data." });
  }

  try {
    // Create a new job post instance
    const job = new jobposting({
      location,
      jobdiscription,
      jobtittle,
      // payPerHours,
      category,
      aboutus,
      starttime,
      startdate,
      // wantdate,
      // wanttime,
      age,
      gender,
      days,
      postdate: Date.now(), // Save current timestamp
    });

    // Save the job post to the database
    await job.save();
    console.log("The job data is saved successfully");
    res.status(200).json({ message: "Job post stored successfully" });
  } catch (error) {
    console.error("Error storing job post:", error);
    res
      .status(500)
      .json({
        message: "Failed to store the job post in the database",
        error: error.message,
      });
  }
};

module.exports = { postjob };
