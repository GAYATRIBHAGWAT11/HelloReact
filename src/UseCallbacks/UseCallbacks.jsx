import React, { useCallback, useState } from "react";
import Child from "../UseCallbacks/Child";

 const Parent=()=>{
     const [counterOne, setcounterOne]=useState(10)
     const [counterTwo, setcounterTwo]=useState([])
     const incrementCounter=()=>{
         setcounterOne(counterOne+1)
     }
     const func=useCallback(()=>{
         console.log("hello gayatri");
     }, counterTwo)
return(
    <>
    <Child counterTwo={counterTwo} func={func}/>
    <h1>{counterOne}</h1>
    <button onClick={incrementCounter}>usecallback</button>

    </>
)
 }
 export default Parent;