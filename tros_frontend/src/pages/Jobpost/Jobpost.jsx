// import axios from 'axios';
// import React, { useState } from 'react';

// const Jobpost = () => {
//   const [jobtittle, setJobtittle] = useState("");
//   const [jobdiscription, setJobdiscription] = useState("");
//   const [location, setLocation] = useState("");
//   const [responsiblity, setResponsiblity] = useState("");
//   const [payPerHours, setPayPerHours] = useState("");
//   const [category, setCategory] = useState("");
//   const [age, setAge] = useState("");

//   const [selectedDays, setSelectedDays] = useState([]);
//   const [schedule, setSchedule] = useState({});

//   const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



//   const handleScheduleChange = (day, key, value) => {
//     setSchedule({
//       ...schedule,
//       [day]: {
//         ...schedule[day],
//         [key]: value,
//       },
//     });
//   };


//   const toggleDay = (day) => {
//     if (selectedDays.includes(day)) {
//       setSelectedDays(selectedDays.filter((d) => d !== day));
//       const updatedSchedule = { ...schedule };
//       delete updatedSchedule[day];
//       setSchedule(updatedSchedule);
//     } else {
//       setSelectedDays([...selectedDays, day]);
//     }
//   };

//   // Radio button
//   const [gender, setGender] = useState("");

//   // Handle gender change
//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//   };

//   // Job timing details
//   const [wantdate, setWantdate] = useState("");
//   const [wanttime, setWanttime] = useState("");
//   const [avilabletime, setAvilabletime] = useState("");
//   const [avilabledate, setAvilabledate] = useState("");

//   const postingJob = (e) => {
//     // e.preventDefault(); // Prevent default form submission

//     const data = {
//       jobtittle,
//       jobdiscription,
//       location,
//       responsiblity,
//       payPerHours,
//       category,
//       avilabletime,
//       avilabledate,
//       wantdate,
//       wanttime,
//       age,
//       gender,
//     };

//     console.log("Posting job data:", data);

//     axios.post("http://localhost:7000/user/jobpost", data)
//       .then((res) => {
//         console.log("Data saved to database:", res);
//         alert("Job posted successfully!");
//       })
//       .catch((error) => {
//         console.error("Error saving data:", error);
//         alert("Failed to post the job. Please try again.");
//       });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={postingJob}>
//           <input
//             type="text"
//             placeholder="Enter your job title"
//             value={jobtittle}
//             onChange={(e) => setJobtittle(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter your job description"
//             value={jobdiscription}
//             onChange={(e) => setJobdiscription(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter your location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter your responsibility"
//             value={responsiblity}
//             onChange={(e) => setResponsiblity(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Enter pay per hour"
//             value={payPerHours}
//             onChange={(e) => setPayPerHours(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter your category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//           <div>
//             <h3>Gender</h3>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 checked={gender === "male"}
//                 onChange={handleGenderChange}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 checked={gender === "female"}
//                 onChange={handleGenderChange}
//               />
//               Female
//             </label>
//           </div>

//           <h1>Select your date and time when you want to employ</h1>
//           <div>
//             <label>Select Job Start Date:</label>
//             <input
//               type="date"
//               value={wantdate}
//               onChange={(e) => setWantdate(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Select Job Start Time:</label>
//             <input
//               type="time"
//               value={wanttime}
//               onChange={(e) => setWanttime(e.target.value)}
//             />
//           </div>

//           <h1>Please tell us when you are available on job site</h1>
//           <div>
//             <label>Select Available Date:</label>
//             <input
//               type="date"
//               value={avilabledate}
//               onChange={(e) => setAvilabledate(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Select Available Time:</label>
//             <input
//               type="time"
//               value={avilabletime}
//               onChange={(e) => setAvilabletime(e.target.value)}
//             />
//           </div>

//           <input
//             type="number"
//             placeholder="Enter your age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
           
//            <h2>Post a Job</h2>
//       <div className="days-container">
//         {weekDays.map((day) => (
//           <div key={day} className="day-option">
//             <input
//               type="checkbox"
//               id={day}
//               checked={selectedDays.includes(day)}
//               onChange={() => toggleDay(day)}
//             />
//             <label htmlFor={day}>{day}</label>
//             {selectedDays.includes(day) ? (
//               <div className="schedule-inputs">
//                 <input
//                   type="time"
//                   onChange={(e) => handleScheduleChange(day, "date", e.target.value)}
//                   required
//                 /> 
//                 to
//                 <input
//                   type="time"
//                   onChange={(e) => handleScheduleChange(day, "time", e.target.value)}
//                   required
//                 />
//                 <span style={{ color: "green" }}>✔</span>
//               </div>
//             ) : (
//               <span style={{ color: "red" }}>✘</span>
//             )}
//           </div>
//         ))}
//       </div>
//       <button type="submit">Submit Job</button>
//           <button type="submit">Post</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Jobpost;








import axios from "axios";
import React, { useState } from "react";

const JobPost = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [aboutus, setAboutus] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  const [gender, setGender] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handleScheduleChange = (day, key, value) => {
    setSelectedDays((prev) => {
      const updatedDays = [...prev];
      const existingDayIndex = updatedDays.findIndex((entry) => entry.day === day);

      if (existingDayIndex !== -1) {
        updatedDays[existingDayIndex][key] = value;
      } else {
        updatedDays.push({ day, [key]: value });
      }
      return updatedDays;
    });
  };

  const toggleDay = (day) => {
    if (selectedDays.some((entry) => entry.day === day)) {
      setSelectedDays((prev) => prev.filter((entry) => entry.day !== day));
    } else {
      setSelectedDays((prev) => [...prev, { day }]);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const postingJob = (e) => {
    e.preventDefault();

    const data = {
      jobTitle,
      jobDescription,
      location,
      aboutus,
      category,
      age,
      gender,
      startDate,
      startTime,
      endTime,
      schedule: selectedDays, // Including the selected days and times
    };

    console.log("Posting job data:", data);

    axios
      .post("http://localhost:7000/user/jobpost", data)
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
    <div>
      <form onSubmit={postingJob}>
        <input
          type="text"
          placeholder="Enter your job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter about us"
          value={aboutus}
          onChange={(e) => setAboutus(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter job category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
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

        <div>
          <label>Select Job Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <h2>Post a Job</h2>
        <div className="days-container">
          {weekDays.map((day) => (
            <div key={day} className="day-option">
              <input
                type="checkbox"
                id={day}
                checked={selectedDays.some((entry) => entry.day === day)}
                onChange={() => toggleDay(day)}
              />
              <label htmlFor={day}>{day}</label>
              {selectedDays.some((entry) => entry.day === day) && (
                <div className="schedule-inputs">
                  <input
                    type="time"
                    placeholder="Start Time"
                    value={startTime}
                    onChange={(e) => handleScheduleChange(day, "start", e.target.value)}
                    required
                  />
                  to
                  <input
                    type="time"
                    placeholder="End Time"
                    value={endTime}
                    onChange={(e) => handleScheduleChange(day, "end", e.target.value)}
                    required
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default JobPost;
