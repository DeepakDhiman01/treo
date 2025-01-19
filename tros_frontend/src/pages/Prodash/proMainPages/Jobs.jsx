import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Jobs() {
  const [job, setJob] = useState([]); // State for jobs
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    console.log("Fetching jobs...");
    axios
      .post("http://localhost:7000/user/job")
      .then((res) => {
        console.log("Response received:", res);
        setJob(res.data); // Update state with job data
      })
      .catch((err) => {
        console.log("Error occurred:", err);
        setError("Failed to fetch jobs. Please try again.");
      });
  }, []); // Empty dependency array ensures this runs once on component mount

  console.log("Current job list:", job);

  return (
    <>
      <h1>Job List</h1>
      { job.length > 0 ? (
        job.map((jb, index) => (
          <h2 key={index}>{ jb.jobtittle}</h2> // Use a fallback for property names
        ))
      ) : (
        <p>No jobs available at the moment.</p> // Handle empty job list
      )}
    </>
  );
}

export default Jobs;
