//hoc is advanced technique in react for resuing component logic
import React, { useState } from "react";

export default function Hoc() {
    return (
        <>
            <h1>this is higher order function</h1>
            {/* <Counter /> */}
            <Hoc1 cmp={Counter}/>
            <HocGreen cmp1={Counter}/>
        </>
    )
}


function Hoc1(props){
    return(
        <>
        <h2 style={{backgroundColor: 'red'}}>{props.cmp}</h2>
        </>
    )
}


function HocGreen(props){
    return(
        <>
        <h2 style={{backgroundColor: 'green'}}>{props.cmp1}</h2>
        </>
    )
}


function Counter() {
    const [count, setcount] = useState(0)
    return (
        <>
            <h3>{count}</h3>
            <button onClick={setcount(count + 1)}>update</button>
        </>
    )
}
