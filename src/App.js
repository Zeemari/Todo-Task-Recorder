import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <NavBar />
      </div>
        <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home/> } />
         </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App;