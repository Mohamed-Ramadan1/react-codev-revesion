import React, { useState } from 'react'


const HookCounterThree = () => {
    const initValue = 0;
    const [count, setCount] = useState(initValue);

    return (
        <div>
            <h3>The value insid counter : {count}</h3>
            <div>
                <button onClick={()=>setCount(initValue)}>Reset Counter value </button>
                <button onClick={()=> setCount(prev=>prev+1)}>Incress  Counter value </button>
                <button onClick={()=> setCount(prev=>prev-1)}>Decrees Counter value </button>
            </div>

        </div>
    )
}

export default HookCounterThree;