import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <h1 className='bg-green-700 text-white p-3'>React Router</h1>
    <p className='bg-red-700 text-white p-3 text-centers'>
      Hello World
    </p>
  </React.StrictMode>,
)
