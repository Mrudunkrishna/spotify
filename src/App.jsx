import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import Spotify from './page/spotify.jsx'
import Login from './page/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" exact element={<Spotify/>}></Route>
        <Route path="/login" exact element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
