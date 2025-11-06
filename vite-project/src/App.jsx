import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col items-center">
      <img src={logo} alt="Logo" />
      <p className="mt-4 text-center text-5xl font-medium pt-100 pb-100">
        Real time with <span className="text-blue-600">Real people</span>
      </p>
    </div>
    </>
  )
}

export default App
