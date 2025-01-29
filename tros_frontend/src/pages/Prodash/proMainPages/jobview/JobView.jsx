import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const JobView = () => {

  const [jobData, setJobData] = useState([]);
  const id = useParams()

  useEffect(() => {
    console.log()
      axios
      .post(`http://localhost:7000/user/jobview/${id}`)
      .then((res) => {
        console.log("this is a jobviewreaponse ", res)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default JobView
