import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// icon
import { IoLocationOutline } from "react-icons/io5";

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
      <div>
        <h1 className='text-3xl font-bold pb-4'>Job List</h1>
        <div className=''>
          
          {job.length > 0 ? (
            job.map((job, index) => (
              <Link to={`job-view/${job._id}`}>
              <div className='my-2 bg-white py-2 px-4 rounded-lg border-1 border-[#e5e5e5]'>
                 <h2 className='font-semibold text-lg' key={index}>{job.jobtittle}</h2>
                 <div className='locations my-3'>
                  <span className='flex items-center content-center gap-1'><IoLocationOutline />{job.location}</span>
                 </div>
              </div>
              </Link>
            ))
          ) : (
            <p>No jobs available at the moment.</p> // Handle empty job list
            
          )}
          
        </div>
      </div>
    </>
  );
}

export default Jobs;
