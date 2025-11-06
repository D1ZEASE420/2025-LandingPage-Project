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
    <div class="flex-initial shadow-xl">
      <h2 class="text-4x1 font-bold">Either host or Join</h2>
        <button class="flex justify-center rounded-xl text-lg shadow-md">CREATE GAME</button>
        <p class="text-lg">OR</p>
        <p class="text-lg">JOIN GAME</p>
      <button class="flex justify-center rounded-xl text-lg shadow-md">ENTER PIN</button>
    </div>
    </>
  )
}

export default App
