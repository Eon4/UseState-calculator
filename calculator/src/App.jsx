import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState(0)
  const [valueOne, setvalueOne] = useState(0)
  const [valueTwo, setvslueTwo] = useState(0)

  const add = () => {
    const res = valueOne + valueTwo
    setResult(res)
  }


  return (
    <>
    <h1>Køb æg ved landmand Børge</h1>
    </>
  )
}

export default App
