import axios from 'axios'
import React, { useState } from 'react'

const Jobpost = () => {
const [jobtittle, setJobtittle ] = useState("");
const [jobdiscription, setJobdiscription] = useState("")
const [location, setLocation ] = useState("")
const [ responsiblity, setResponsiblity ] = useState("")
const [ payPerHours, setPayPerHours ] = useState("")
const [ category, setCategory ] = useState("")





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

    <button  onClick={()=>postingjob()} > Post</button>
    </form>
  </div>
  

  
  </>
  )
}

export default Jobpost