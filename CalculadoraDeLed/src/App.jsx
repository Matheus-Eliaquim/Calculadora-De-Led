import './App.css'
import { useState } from 'react'
import CalculadoraDeLed from './CalculadoraDeLed.jsx'
import CalculadoraDePerfil from './CalculadoraDePerfil.jsx'



function App() {
  const [abrir_perfil, setAbrir_perfil] = useState(false) 
  const [abrir_calculadora, setAbrir_calculadora] = useState(false) 

  return (
    <div id="initial">
      {abrir_calculadora === true ? (<CalculadoraDeLed />) : (<p>erro</p>) } 
      {abrir_perfil === true ? (<CalculadoraDeLed />) : (<p>erro</p>) }     
    </div>
  )

}

export default App
