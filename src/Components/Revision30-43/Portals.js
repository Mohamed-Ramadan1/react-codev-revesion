import React from "react";

import ReactDOM from "react-dom";

const Portals = () => {
    return ReactDOM.createPortal(
        <h1>Now you are out of the main root</h1>,
        document.getElementById("root-portal")
    )
}

export default Portals;