import React from "react";

// Now pass down { value } as a prop.
// Then pass value into the div by escaping into JSX

// Inside of Square: We need a way to handle the click event.
// create a function called handleClick() {}
// now place handle click inside the button element.

export default function Square ({ value }) {
    function handleClick() {
        console.log("Clicked : D")
    }
    return (
        <>
            <div className="square">
                <button onClick={handleClick}>{value}</button>
            </div>
        </>
    )
}