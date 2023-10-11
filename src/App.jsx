import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import ShipList from './pages/ShipList/ShipList'
import ShipDetailsWithLocationHook from './pages/ShipDetailsWithLocation/ShipDetailsWithLocation'
import ShipDetailsWithoutLocationHook from './pages/ShipDetailsWithParams/ShipDetailsWithParams'
import Nav from './components/Nav/Nav'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/ships' element={<ShipList />}  />
        <Route path='/ships/:shipId' element={<ShipDetailsWithoutLocationHook />}  />
        <Route path='/ships/details' element={<ShipDetailsWithLocationHook />}  />
      </Routes>
    </>
  )
}

export default App
