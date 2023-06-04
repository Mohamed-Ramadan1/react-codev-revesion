import React from "react";

const Heros = ({ heroName }) => {
    if (heroName === "joker") throw new Error("BadMan");
    return (
        <div>Hero name is {heroName}</div>
    )
}

export default Heros;