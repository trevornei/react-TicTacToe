import React, { useState } from "react"
import Square from "./Square"

// Create a function called square and add export default statement. 
// Square() should return a button with "x" as the text

// Create a div for each row and give it a class of "board-row"
// Create a new component called Square
// Refactor each row to have 3 square components. 

// Now that the board has 3 rows of 3 squares let's work on state. 
// Pass { value } prop to each square.

export default function board() { 
    {/*
        Lifting State Up: value and set value will reside in the parent element (Board) and will now pass down the state to child elements.
        This time, read = square && write = setSquare
        -> This is because useState callback fn creates an arary with 9 elements.
        -> Every when time read is passed down, it will be given a number corresponding with the elements unique index in the Array.
        -> Each element should initially load with a value of null.
    */ }
    const [square, setSquare] = useState(Array(9).fill(null))
    return (
        <>
            <div className="mt-4 mb-12 p-4 rounded-sm bg-gradient-to-bl from-violet-800 to-cyan-500">
                <div className="board-row">
                        <Square value={square[0]}/>
                        <Square value={square[1]}/>
                        <Square value={square[2]}/>
                </div>
                <div className="board-row">
                    <Square value={square[3]}/>
                    <Square value={square[4]}/>
                    <Square value={square[5]}/>
                </div>
                <div className="board-row">
                    <Square value={square[6]}/>
                    <Square value={square[7]}/>
                    <Square value={square[8]}/>
                </div>
            </div>
        </>
    )
}