import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black mb-4 rounded-xl'>tailwind test</h1>
      <Card username = 'chaiaurcode'btntext='click me'/>
      <Card username = 'anamika' btntext='visit profile'/>
    </>
  )
}

export default App
