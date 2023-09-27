import React from 'react'
import Title from './components/Title.jsx'
import Board from './components/Board.jsx'
import {Routes, Route} from 'react-router-dom'

// import: Title.jsx, Board.jsx
// Return the board Component

{/*  */}
// React Router DOM
// Create component routes.
// Inside <Routes> put in a <Route /> for each page.
// Each <Route /> needs a route path that they go to! Think of paths as url that defines the location, loosely.

// Will come back to this...
{/* <nav>
            <ul>
                <li>
                    <Link to="/">
                        <h1 className="text-xl font-bold">Home</h1>
                    </Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Board/>}/>
        </Routes> */}



export default function App() {
  return (
    <>
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r shadow-lg shadow-slate-500 from-blue-200 to-blue-500 rounded-md">
        <Title/>
        <Board/>
    </div>    
    </>
  )
}
