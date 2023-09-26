import React from 'react'
import Title from './components/Title.jsx'
import Board from './components/Board.jsx'

// import: Title.jsx, Board.jsx
// Return the board Component

export default function App() {
  return (
    <>
    <div className="w-full h-full mx-auto my-32 flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500 rounded-md">
        <Title/>
        <Board/>
    </div>
    </>
  )
}
