import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Client from './components/client';
import Home from './pages/home';
import Basket from './pages/basket';
import Details from './pages/details';
import Add from './pages/add';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Client/>}>
          <Route index element={<Home/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path={`details/:id`} element={<Details/>}/>
          <Route path='add' element={<Add/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
