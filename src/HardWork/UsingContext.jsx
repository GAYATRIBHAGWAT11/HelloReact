import React, { useContext } from 'react'
import {contextApi} from '../HardWork/ContextApi'

function UsingContext() {
    const {myData}=useContext(contextApi)
    console.log("my data", myData);
    
  return (
    <>
    {
        myData.map((items)=>{
         return <h1>{items.category}</h1>

        })
    }
    </>
  )
}

export default UsingContext
