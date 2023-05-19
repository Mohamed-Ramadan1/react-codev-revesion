import React from 'react';




const Functionclicks = () => {
    function clickHandel(){
        document.getElementById("btn").innerHTML = "why you click me you are so stuped";
    }
    return (
        <div>
            <button id="btn" onClick={clickHandel}>Click Me</button>
        </div>
    )
}

export default Functionclicks;