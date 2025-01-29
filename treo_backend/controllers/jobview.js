const jobposting = require('../model/jobpostschema');

const jobview = async (req, res) => {
    const { id } = req.params; // Access `id` from URL params
    console.log("Received job ID:", id);

    try {
        // Find the job by its `_id`
        const data = await jobposting.findById(id); // Use `findById` for querying `_id`
        
        if (!data) {
            return res.status(404).json({ message: "Job not found" });
        }

        console.log("Fetched job data:", data);
        res.status(200).json(data); // Send the data back as JSON
    } catch (error) {
        console.error("Error fetching job data:", error);
        res.status(500).json({ message: "Internal Server Error" }); // Send error response
    }
};

module.exports = { jobview };
