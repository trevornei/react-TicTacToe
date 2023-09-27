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
    const [squares, setSquares] = useState(Array(9).fill(null))

    function handleClick(i) {
        {/*
            We need to factor in that for each click, we need to take account for the index that the click is taking place in.
        */}
        const nextSquares = squares.slice()
        nextSquares[i] = 'X'
        setSquares(nextSquares)
    }

    return (
        <>
            <div className="mt-4 mb-12 p-4 rounded-sm bg-gradient-to-bl from-violet-800 to-cyan-500">
                <div className="board-row">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                </div>
            </div>
        </>
    )
}