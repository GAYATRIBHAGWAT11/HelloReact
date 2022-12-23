import React, { useEffect, useState } from "react";

function FunctionCounterOne(){
    const [count, setcount]=useState(0)
    const [count1, setcount1]=useState(0)

    useEffect(()=>{
        console.log(`clicked ${count} times`);  
    },[count])  //yahape array me jo hum denge ye useeffect sirf usike lie chalega/ tabhi chalega
    return(
        <>
        <div className="">
            <button onClick={()=>{
                setcount(count+1)
            }}>Click - {count}</button>
        </div>
        </>
    )

}
export default FunctionCounterOne;