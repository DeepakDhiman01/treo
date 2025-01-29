import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const JobView = () => {

  const [jobData, setJobData] = useState([]);
  const id = useParams()

  useEffect(() => {
      axios
      .post(`http://localhost:7000/user/job/${id}`)
      .then((res) => {
        console.log(res)
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
