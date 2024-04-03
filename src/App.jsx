import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import HotelsId from './pages/Hotels_x_Id'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHotelsThunk } from './store/slices/hotels.slice'
import { Route, Routes } from 'react-router-dom'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels/:id' element={<HotelsId />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
