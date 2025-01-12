import axios from 'axios'
import React, { useState } from 'react'

const Jobpost = () => {
const [jobtittle, setJobtittle ] = useState("");
const [jobdiscription, setJobdiscription] = useState("")
const [location, setLocation ] = useState("")
const [ responsiblity, setResponsiblity ] = useState("")
const [ payPerHours, setPayPerHours ] = useState("")
const [ category, setCategory ] = useState("")


//  radio buttton
  const [gender, setGender] = useState('');


  // Handle gender change
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };


const postingjob = ( )=>{

const data = {
    jobtittle,
    jobdiscription,
    location,
    responsiblity,
    payPerHours,
    category
}

axios.post("http://localhost:7000/user/jobpost", {data} )
.then((res)=>{
    console.log("the data is saved database" , res);
    alert("the data is store sucessfully");
    
})
.catch((error)=>{
  console.log("the data is not save in database",error );
  alert("data isnot store");
})

}

  return (
  <>
  <div>
    <form action="">
<input type="text"  placeholder='enter your jobtittle'  value={jobtittle} onChange={ (e)=>setJobtittle(e.target.value)} />
    <input type="text"  placeholder='enter your jobdiscription'  value={jobdiscription} onChange={ (e)=>setJobdiscription(e.target.value)} />
    <input type="text"  placeholder='enter your location '  value={location} onChange={ (e)=>setLocation(e.target.value)} />
    <input type="text"  placeholder='enter your responsiblity '  value={responsiblity} onChange={ (e)=>setResponsiblity(e.target.value)} />
    <input type="text"  placeholder='enter your  payPerHours '  value={payPerHours} onChange={ (e)=>setPayPerHours(e.target.value)} />
    <input type="text"  placeholder='enter your  category '  value={category} onChange={ (e)=>setCategory(e.target.value)} />
    <div>
        <h3>Gender</h3>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={gender === 'male'} 
            onChange={handleGenderChange} 
          /> 
          Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={gender === 'female'} 
            onChange={handleGenderChange} 
          /> 
          Female
        </label>
      </div>

<input type="text" placeholder=''  value={age} onChange={ (e)=>setCategory(e.target.value)} />

    <button  onClick={()=>postingjob()} > Post</button>
    </form>
  </div>
  

  
  </>
  )
}

export default Jobpost