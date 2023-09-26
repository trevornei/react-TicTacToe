import React from "react";
import { useState } from "react";

// Now pass down { value } as a prop.
// Then pass value into the div by escaping into JSX

// Inside of Square: We need a way to handle the click event.
// create a function called handleClick() {}
// now place handle click inside the button element.

// Now we need to import state.
// Above the handleClick() call the useState() fn.
// [value, setValue] 
// value will store the value. 
// setValue is a function that changes the value. 


export default function Square ({ value }) {
    const [value, setValue] = useState(null)

    function handleClick() {
        console.log(`Clicked square number: ${value} :D`)
    }
    return (
        <>
            <div className="square">
                <button onClick={handleClick}>{value}</button>
            </div>
        </>
    )
}