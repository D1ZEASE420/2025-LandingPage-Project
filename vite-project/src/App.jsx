import { useState, useEffect } from 'react'
import logo from './assets/logo.png'
import './App.css'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  })

  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30) 
    
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
      }
    }
    
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    
    return () => clearInterval(timer)
  }, [])
  

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section className="snap-start h-screen flex flex-col items-center justify-center bg-white">
        <img src={logo} alt="Logo" />
      </section>

      <section className="snap-start h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-center text-5xl font-medium max-sm:text-4xl">Real time with</p>
        <p className="text-center text-5xl font-medium text-blue-600 mt-6 max-sm:text-4xl">Real people</p>
      </section>

      <section className="snap-start h-screen flex justify-center flex-col items-center bg-white">
        <h1 className="text-4xl font-semibold mb-12">Either host or Join</h1>
        <div className="w-100 h-100 border-1 border-neutral-200 rounded-2xl flex justify-center flex-col items-center shadow-lg p-8 gap-6 max-sm:w-70 max-sm:h-70">
          <button className="flex justify-center rounded-xl text-2xl p-5 font-semibold shadow-lg border-1 border-neutral-200 max-sm:w-50 max-sm:h-15 max-sm:text-lg max-sm:items-center">CREATE GAME</button>
          <p className="text-xl font-semibold max-sm:text-lg">OR</p>
          <p className="text-xl font-semibold max-sm:text-lg">JOIN GAME</p>
          <button className="flex items-center justify-center rounded-xl w-60 text-2xl p-5 shadow-lg border-1 border-neutral-200 font-semibold max-sm:w-50 max-sm:h-15 max-sm:text-lg max-sm:items-center">ENTER PIN</button>
        </div>
      </section>


      <section className="snap-start h-screen flex justify-center flex-col items-center bg-white">
        <h1 className="text-4xl font-semibold text-center">Choose</h1>
        <p className="text-center text-2xl font-medium mb-8">where you play <br />in the <span className="text-blue-600">real world</span></p>
        <div className="w-100 h-100 border-1 border-neutral-200 rounded-2xl flex justify-center flex-col items-center shadow-lg max-sm:w-70 max-sm:h-70">
          <img src="./src/assets/map.jpg" alt="" className='rounded-xl border-1 shadow-lg w-100 h-100' />
        </div>
      </section>

      <section className='snap-start h-screen flex justify-center flex-col items-center bg-white '>
        <h1 class="text-4xl font-semibold">CHOOSE</h1>
              <p class="text-xl font-medium pb-5">Your <span class="text-center text-xl font font-medium mt-5 text-blue-700">PowerUp</span></p>
          <div class="flex justify-center border-1 shadow-lg rounded-xl border-neutral-200 w-100 h-100 flex-col items-center max-sm:w-70 max-sm:h-70">
            <div class="flex justify-center flex-col items-center">
              
              <div className='flex flex-row'>
            <div class="flex-row flex-col">
              <button class="flex justify-center rounded-xl text-2xl p-5 m-3 font-semibold shadow-lg border-1 border-neutral-200 h-30 w-40 flex justify-center items-center max-sm:w-30 max-sm:h-25 max-sm:text-lg">Extra Points</button>
              <button class="flex justify-center rounded-xl text-2xl p-5 m-3 font-semibold shadow-lg border-1 border-neutral-200 h-30 w-40 flex justify-center items-center max-sm:w-30 max-sm:h-25 max-sm:text-lg">Point Bot</button>
               </div>
               <div class="flex-row flex-col">
                <button class="flex justify-center rounded-xl text-2xl p-5 m-3 font-semibold shadow-lg border-1 border-neutral-200 h-30 w-40 flex justify-center items-center max-sm:w-30 max-sm:h-25 max-sm:text-lg">OverPower</button>
                <button class="flex justify-center rounded-xl text-2xl p-5 m-3 font-semibold shadow-lg border-1 border-neutral-200 h-30 w-40 flex justify-center items-center max-sm:w-30 max-sm:h-25 max-sm:text-lg">Steal</button>     
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="snap-start h-screen flex justify-center flex-col items-center bg-white">
        <p className="text-2xl font-semibold text-center mb-12">Coming soon</p>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col items-center">
            <button className="flex justify-center rounded-xl text-2xl p-3 font-semibold shadow-lg border-1 border-neutral-200 h-15 w-20 mb-3">
              {timeLeft.days}
            </button>
            <span className="text-sm text-gray-600">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="flex justify-center rounded-xl text-2xl p-3 font-semibold shadow-lg border-1 border-neutral-200 h-15 w-20 mb-3">
              {timeLeft.hours}
            </button>
            <span className="text-sm text-gray-600">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <button className="flex justify-center rounded-xl text-2xl p-3 font-semibold shadow-lg border-1 border-neutral-200 h-15 w-20 mb-3">
              {timeLeft.minutes}
            </button>
            <span className="text-sm text-gray-600">Minutes</span>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default App