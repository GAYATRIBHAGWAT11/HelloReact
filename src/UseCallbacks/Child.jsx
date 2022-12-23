import React, { memo } from "react";


const Child=({counterTwo, setcounterTwo})=>{
    console.log('child component rendered');
    return(
        <>
        {/* <h1>{counterTwo}-{setcounterTwo}</h1> */}
        <h1>child component</h1>
        </>
    )
}
 export default memo(Child); 