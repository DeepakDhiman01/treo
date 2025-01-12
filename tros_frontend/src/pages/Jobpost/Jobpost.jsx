import axios from 'axios';
import React, { useState } from 'react';

const Jobpost = () => {
  const [jobtittle, setJobtittle] = useState("");
  const [jobdiscription, setJobdiscription] = useState("");
  const [location, setLocation] = useState("");
  const [responsiblity, setResponsiblity] = useState("");
  const [payPerHours, setPayPerHours] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");

  // Radio button
  const [gender, setGender] = useState("");

  // Handle gender change
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Job timing details
  const [wantdate, setWantdate] = useState("");
  const [wanttime, setWanttime] = useState("");
  const [avilabletime, setAvilabletime] = useState("");
  const [avilabledate, setAvilabledate] = useState("");

  const postingJob = (e) => {
    // e.preventDefault(); // Prevent default form submission

    const data = {
      jobtittle,
      jobdiscription,
      location,
      responsiblity,
      payPerHours,
      category,
      avilabletime,
      avilabledate,
      wantdate,
      wanttime,
      age,
      gender,
    };

    console.log("Posting job data:", data);

    axios.post("http://localhost:7000/user/jobpost", data)
      .then((res) => {
        console.log("Data saved to database:", res);
        alert("Job posted successfully!");
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("Failed to post the job. Please try again.");
      });
  };

  return (
    <>
      <div>
        <form onSubmit={postingJob}>
          <input
            type="text"
            placeholder="Enter your job title"
            value={jobtittle}
            onChange={(e) => setJobtittle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your job description"
            value={jobdiscription}
            onChange={(e) => setJobdiscription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your responsibility"
            value={responsiblity}
            onChange={(e) => setResponsiblity(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter pay per hour"
            value={payPerHours}
            onChange={(e) => setPayPerHours(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <div>
            <h3>Gender</h3>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </div>

          <h1>Select your date and time when you want to employ</h1>
          <div>
            <label>Select Job Start Date:</label>
            <input
              type="date"
              value={wantdate}
              onChange={(e) => setWantdate(e.target.value)}
            />
          </div>
          <div>
            <label>Select Job Start Time:</label>
            <input
              type="time"
              value={wanttime}
              onChange={(e) => setWanttime(e.target.value)}
            />
          </div>

          <h1>Please tell us when you are available on job site</h1>
          <div>
            <label>Select Available Date:</label>
            <input
              type="date"
              value={avilabledate}
              onChange={(e) => setAvilabledate(e.target.value)}
            />
          </div>
          <div>
            <label>Select Available Time:</label>
            <input
              type="time"
              value={avilabletime}
              onChange={(e) => setAvilabletime(e.target.value)}
            />
          </div>

          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};

export default Jobpost;
