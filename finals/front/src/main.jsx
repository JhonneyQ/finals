import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Provider from './components/basketCont/index.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider>
  <App />
  </Provider>
    
  </BrowserRouter>,
)
