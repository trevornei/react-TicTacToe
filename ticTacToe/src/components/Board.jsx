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
    */}
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    /*
        Validate Winner: Make a function called isWinner.
        --> Pass in the Argument squares
        --> Inside Fn: create an array of array's called lines.
        --> each array stores the values for the winning sequences
    */

    function isWinnner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ]
        // For loop iterates over the inner array
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            // if statement checks if x === x || o === o;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]  ) {
                return squares[a]
            }
        }
        return null;
    }

    function handleClick(i) {
        /*
            We need to factor in that for each click, we need to take account for the index that the click is taking place in.  
            The variable nextSquares creates a copy of the squares array the .slice() method. 
                -> This is important because we are able to replace the data with a new copy with the altered data.
                -> The goal here is to NOT mutate the squares array, rather make a copy.
                -> The 'time travel' feature of the app is dependent on the original array remaining intact and altering the data in a copied array.
        */

        /*
            Preventing squares from overriding the first click:
            My first attempt looked like this
             
            if (nextSquares === 'X' || nextSquares === 'O') {
            return
            }

            ---> ? NOTE: I do not understand why I would be checking the squares array since it is important to NOT manipulate the original array.

            Regardless, I learned that if condition is truthy, then using the keyword return will abort the function.
        */

        if (squares[i] || isWinnner(squares)) {
            return
        }

        const nextSquares = squares.slice()
        
        if (xIsNext) {
            nextSquares[i] = 'X'
        }  else {
            nextSquares[i] = 'O'
        }
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }

    const winner = isWinnner(squares)
    let status
    if (winner) {
        status = `${winner} won the game!`
    } else {
        status = `Next ${xIsNext ? 'X' : 'O'}`
    }

    console.log(squares)

    return (
        <>
            <div className="mt-4 mb-12 p-4 rounded-sm bg-gradient-to-bl from-violet-800 to-cyan-500">
                <div className="board-row">
                    {/*NOTE: onSquareClick takes an arrow function. The code after the arrow => runs when the component is clicked.
                        -> handle click takes an argument of the index for the element of the squares state. */}
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
            <div className="status">
                {status}
            </div>
        </>
    )
}