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
    console.log("the data is saved database")
})
.catch((error)=>{
  console.log("the data is not save in database")
})

}

  return (
  <>
  
  
  </>
  )
}

export default Jobpost