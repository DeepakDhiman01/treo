import axios from 'axios'
import React, { useEffect } from 'react'

function Jobs() {

useEffect(()=>{
  axios.post("http://localhost:7000/user/jod")
  .then((res)=>{
  console.log("this is a respose" , res)
  })
  .catch((err)=>{
      console.log("this  is a error" , err)
  })
})

  return (
    <>
      <h1>
        Hello
      </h1>
    
    </>
  )
}

export default Jobs
