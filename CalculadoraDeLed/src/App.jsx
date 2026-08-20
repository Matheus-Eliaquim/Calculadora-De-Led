import './App.css'
import DadosEntrada from './components/DadosDeEntrada.jsx'
import TabelasFitasPerfis from './components/TabelasFitasPerfis.jsx'
import TabelasFontesTotais from './components/TabelasFontesTotais.jsx'
import InputMetros from './components/InputMetros.jsx'
import { useState } from 'react'



function App() {
  const [potencia, settPotencia] = useState("")
  const [rolo, settRolo] = useState("")
  const [perfil, settPerfil] = useState("")
  const [coeficiente, settCoeficiente] = useState("")

  const receberDados = ({ potencia, rolo, perfil, coeficiente }) => {
    settPotencia(potencia);
    settRolo(rolo);
    settPerfil(perfil);
    settCoeficiente(coeficiente);
  }

  const invalid = Number(potencia) + Number(rolo) + Number(perfil) + Number(coeficiente)

  return (
    <div>
    {invalid > 0 ? <InputMetros id='input-metros' potencia={potencia} rolo={rolo} perfil={perfil} coeficiente={coeficiente} /> : <DadosEntrada entradaDados={receberDados} /> }
    </div>
  )

}

export default App
