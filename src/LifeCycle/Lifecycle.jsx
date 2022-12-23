import React, { useEffect, useState } from "react";

function Lifecycle() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // useEffect(()=>{
    //     console.log("life cycle method call");
    // }, [name,email])

    useEffect(() => {
        return () => {
            console.log("life cycle method called");
        }
    },[])
    return (
        <>
            <h1>{name}-{email}</h1>
            <button onClick={() => setName('Aishwarya')}>click me</button>
            <button onClick={() => setEmail('Aishwarya')}>click me</button>
        </>
    )
}
export default Lifecycle;