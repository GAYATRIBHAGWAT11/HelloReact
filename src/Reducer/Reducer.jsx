import React, { useReducer } from "react";

const initialState = 5;


const reducer = (state, action) => {
    console.log(state, action);

    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    }
    return state;
}
const UseReducer = () => {                              //pure function that take in a state and action
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <p>{state}</p>
                <div className="btnStyle">
                    <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                    <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
                </div>
            </div>
        </>
    )
}
export default UseReducer;