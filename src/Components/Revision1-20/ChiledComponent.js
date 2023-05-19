import React from 'react';

const ChildeComp = (props) => {
    return (
        <div>
            <button onClick={()=>props.greetHandelr("Mohamed")}>Greet Parent</button>
        </div>
    )
}

export default ChildeComp;
