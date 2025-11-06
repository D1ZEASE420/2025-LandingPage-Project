import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.png'
import './App.css'
import "./index.css";



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
<<<<<<< HEAD
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-4xl font-semibold pb-10 ">Either host or Join</h1>
    <div class="w-100 h-100 border-1 border-neutral-200 rounded-2xl flex justify-center flex-col items-center shadow-lg">
        <button class="flex justify-center rounded-xl text-2xl p-5 font-semibold shadow-lg border-1 border-neutral-200">CREATE GAME</button>
        <p class="text-xl font-semibold pt-5">OR</p>
        <p class="text-xl font-semibold pb-5">JOIN GAME</p>
      <button class="flex items-center justify-center rounded-xl w-60 text-2xl p-5 shadow-lg border-1 border-neutral-200 font-semibold">ENTER PIN</button>
    </div>
=======
    <div class="flex-initial shadow-xl">
      <h2 class="text-4x1 font-bold">Either host or Join</h2>
        <button class="flex justify-center rounded-xl text-lg shadow-md">CREATE GAME</button>
        <p class="text-lg">OR</p>
        <p class="text-lg">JOIN GAME</p>
      <button class="flex justify-center rounded-xl text-lg shadow-md">ENTER PIN</button>
>>>>>>> ad6b89f46f6068e905f71964b2e5a1a3bd607707
    </div>
    </>
  )
}

export default App