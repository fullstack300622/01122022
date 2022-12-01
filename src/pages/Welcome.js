import React, { useEffect } from 'react'
import axios from 'axios';


const Welcome = () => {

  useEffect(() => {
    axios.get('http://localhost:3001/customer')
    .then(res=>{
      console.log(res)
    })
  }, [])

  return (
    <div>Welcome</div>
  )
}

export default Welcome