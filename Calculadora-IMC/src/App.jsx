import ImcCalc from './components/ImcCalc.jsx'
import ImcTable from './components/ImcTable.jsx'
import { useState } from 'react'
import {data} from './data/data.js'
import './App.css'

function App() {
  const [imc, settImc] = useState("")
  const [info, settInfo] = useState("")
  const [infoClass, settInfoClass] = useState("")

  const calcImc = (e, heightUser, weightUser) => {
    e.preventDefault()    
    if (!weightUser || !heightUser) return

    const heightFloat = +heightUser.replace(",", ".")
    const weightFloat = +weightUser.replace(",", ".")

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    settImc(imcResult)
  }

  return (
    <div className='container'>
      {!imc ? <ImcCalc calcImc = {calcImc}/> : <ImcTable />}   
    </div>
  )
}

export default App
