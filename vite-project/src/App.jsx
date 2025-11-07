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
      <p className="mt-4 text-center text-5xl font-medium pt-155 pb-0">Real time with</p>
      <p className="text-center text-5xl font-medium text-blue-600 mt-5 pb-100">Real people</p>
    </div>
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-4xl font-semibold pb-10 ">Either host or Join</h1>
    <div class="w-100 h-100 border-1 border-neutral-200 rounded-2xl flex justify-center flex-col items-center shadow-lg">
        <button class="flex justify-center rounded-xl text-2xl p-5 font-semibold shadow-lg border-1 border-neutral-200">CREATE GAME</button>
        <p class="text-xl font-semibold pt-5">OR</p>
        <p class="text-xl font-semibold pb-5">JOIN GAME</p>
      <button class="flex items-center justify-center rounded-xl w-60 text-2xl p-5 shadow-lg border-1 border-neutral-200 font-semibold">ENTER PIN</button>
    </div>
    <div>
      <h1 class="text-4xl font-semibold pt-155 text-center">Choose</h1>
      <p className="mt-4 text-center text-2xl font-medium pb-5">where you play <br></br>in the <span className="text-blue-600">real world</span></p>
    </div>
    </div>
    <div class="flex justify-center">
    <div class="w-100 h-100 border-1 border-neutral-200 rounded-2xl flex justify-center flex-col items-center shadow-lg">
      <img src="" alt="" />
    </div>
    </div>
    <div>
      <p class="text-2xl font-semibold flex justify-center text-center pt-5">Coming soon</p>
    </div>
    <div class="flex justify-center">
      <button class="flex justify-center rounded-xl text-2xl p-3 m-2 font-semibold shadow-lg border-1 border-neutral-200 h-15 w-15">25</button>
      <button class="flex justify-center rounded-xl text-2xl p-3 m-2 font-semibold shadow-lg border-1 border-neutral-200 h-15 w-15">10</button>
      <button class="flex justify-center rounded-xl text-2xl p-3 m-2 font-semibold shadow-lg border-1 border-neutral-200 h-15 w-15">52</button>
    </div>
    <div class="pt-10">
      <p class="">Contacts:</p>
    </div>
    </>
  )
}

export default App