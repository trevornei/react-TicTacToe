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

// Change handleClick() from console.log() to the fn that sets the new value.

// NOTE: Now that we have a working proof of handleClick() working and returning 'X' inside each square that is clicked, we need to Lift the State Up.
// We need to lift the state up because for the game to be able to validate who is the winner, we need to be able to share this state with the more than the square component.

// Collecting Data From Multiple children || Having two child components talk to one another... 
// State needs to be shared in the parent and passed down  through props.
// Pass down props as { onSquareClick }



export default function Square ({ value, onSquareClick }) {
    // Comment out state to be passed up to Board.jsx because we CANNOT update state directly from Square.
    // Next step is to pass down the function from the board component. 
    // const [value, setValue] = useState("")
    return (
        <>
            <div className="square rounded-sm shadow-md shadow-green-200 " onClick={onSquareClick}>
                <button>{value}</button>
            </div>
        </>
    )
}