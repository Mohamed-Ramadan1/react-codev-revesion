import React,{useState} from 'react'

const HookCounter = () => {
    const [counter, setCounter] = useState(0)
    


    return (
        <div>
            <h2>From the hook counter value: {counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increes htet value by one 1</button>
        </div>
    )
}

export default HookCounter;