import React from "react"
import Square from "./Square"

// Create a function called square and add export default statement. 
// Square() should return a button with "x" as the text

// Create a div for each row and give it a class of "board-row"
// Create a new component called Square
// Refactor each row to have 3 square components. 

// Now that the board has 3 rows of 3 squares let's work on state. 
// Pass { value } prop to each square.

export default function board() { 
    return (
        <>
            <div className="mt-4 mb-12 p-4 rounded-sm bg-gradient-to-bl from-violet-800 to-cyan-500">
                <div className="board-row">
                        <Square value={1}/>
                        <Square value={2}/>
                        <Square value={3}/>
                </div>
                <div className="board-row">
                    <Square value={4}/>
                    <Square value={5}/>
                    <Square value={6}/>
                </div>
                <div className="board-row">
                    <Square value={7}/>
                    <Square value={8}/>
                    <Square value={9}/>
                </div>
            </div>
        </>
    )
}