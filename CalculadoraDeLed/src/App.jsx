import './App.css'
import { useState } from 'react'
import Button from './components/Button.jsx'
import CalculadoraDeLed from './CalculadoraDeLed.jsx'
import CalculadoraDePerfil from './CalculadoraDePerfil.jsx'



function App() {
  const [abrir_perfil, setAbrir_perfil] = useState(false)
  const [abrir_calculadora, setAbrir_calculadora] = useState(false)

  return (
    <div id="initial">
      <div id="buttons">
        <Button text="Calculadora de fita led" />
        <Button text="Calculadora de perfil" />
      </div>
      {abrir_calculadora === true ? (<CalculadoraDeLed />) : null}
      {abrir_perfil === true ? (<CalculadoraDePerfil />) : null}
    </div>
  )

}

export default App
