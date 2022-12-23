import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';




let contextApi=createContext()
function ContextApi({children}) { 
    const [myData, setmyData]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            setmyData(res.data)
        }).catch((err)=>{
            console.log("error 404", err);
        })

    },[])


  return (
    <>
    {/* <h1>Practicing ContextApi</h1> */}
    <contextApi.Provider value={{myData}}>
    {children}
    </contextApi.Provider>

      
    </>
  )
}

export {ContextApi, contextApi}
