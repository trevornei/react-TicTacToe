import React from "react"
import Square from "./Square"

// Create a function called square and add export default statement. 
// Square() should return a button with "x" as the text

// Create a div for each row and give it a class of "board-row"
// Create a new component called Square
// Refactor each row to have 3 square components. 

export default function board() { 
    return (
        <>
        <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
        </div>
        </>
    )
}