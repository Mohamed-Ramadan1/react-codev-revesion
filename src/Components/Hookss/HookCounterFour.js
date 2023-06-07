import React,{useState} from 'react'

const HookCounterFour = () => {
    const [name, setName] = useState({ firstName: '', secondName: '' });


    
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
                <input type='text' value={name.secondName} onChange={(e)=>setName({...name,secondName:e.target.value})}/>
            </form>
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your second Name name is {name.secondName}</h2>

        </div>
    )
}

export default HookCounterFour;