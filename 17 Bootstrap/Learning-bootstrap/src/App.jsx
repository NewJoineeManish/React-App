import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className='container'>
      <div className='col'>
     <h1>Todo App</h1>
     <input type="text" placeholder='Enter Todo here'></input>
     <input type="date" ></input>
     <button className='btn btn-primary'>Add</button>
     <div><span>Buy Milk</span></div>
      </div>
      <div className='col'>
     
      </div>

    </div>

    </>
  )
}

export default App
