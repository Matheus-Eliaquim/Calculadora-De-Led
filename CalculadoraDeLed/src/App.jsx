import './App.css'
import DadosEntrada from './components/DadosDeEntrada.jsx'
import TabelasFitasPerfis from './components/TabelasFitasPerfis.jsx'
import TabelaFitasPerfis from './components/TabelasFitasPerfis.jsx'
import TabelasFontesTotais from './components/TabelasFontesTotais.jsx'
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

  return (
    <>
      <DadosEntrada entradaDados={receberDados} />
      <div>
        <p>{potencia}</p>
        <p>{rolo}</p>
        <p>{perfil}</p>
        <p>{coeficiente}</p>
      </div>

    </>
  )

}

export default App
