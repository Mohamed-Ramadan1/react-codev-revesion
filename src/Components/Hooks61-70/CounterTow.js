import React,{useReducer} from 'react'

const intState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action) {
        case 'Increment': return state + 1;

        case 'Decrement': return state - 1;

        case 'Reset': return intState ;
        default: return state;
    }
}
const Countertow = () => {
    const [count,dispatc]=useReducer(reducer,intState)
    return (
        <div>
            <h2>The value is : {count.firstCounter }</h2>
            <button onClick={() => dispatc("Increment")}>Increment</button>
            <button onClick={() => dispatc("Decrement")}>Decrement</button>
            <button onClick={() => dispatc("Reset")}>Reset </button>
        </div>
    )
}

export default Countertow;