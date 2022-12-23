import React from 'react'
import { useNavigate } from 'react-router'

export default function About() {
    let naviget=useNavigate()
    let goToHome=()=>{
        naviget('/contact')
    }
  return (
    <div>
      <h1>About</h1>
      <button onClick={goToHome}>click here</button>
    </div>
  )
}
