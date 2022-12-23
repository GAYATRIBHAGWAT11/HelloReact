import React, { useMemo, useState } from "react";


function Memo() {

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)

    let IncrementOne = () => {
        setcounterOne(counterOne + 1)
    }
    let IncrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    const isEven=useMemo(() => {
        console.log('........');
        let i = 0
        while (i < 200000000000) i++
        return counterOne % 2 === 0
    }, counterOne)

    // let isEven=()=>{

    // }

    return (
        <>
            <button onClick={IncrementOne}>counter- {counterOne}</button>
            <span>{isEven ? "even" : "odd"}</span>
            <button onClick={IncrementTwo}>counter- {counterTwo}</button>
        </>
    )

}
export default Memo;