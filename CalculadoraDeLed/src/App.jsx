import './App.css'
import DadosEntrada from './components/DadosDeEntrada.jsx'
import InputMetros from './components/InputMetros.jsx'
import RelatorioFinal from './components/RelatorioFinal.jsx'
import { useState } from 'react'



function App() {
  const [potencia, settPotencia] = useState(0)
  const [rolo, settRolo] = useState(0)
  const [perfil, settPerfil] = useState(0)
  const [coeficiente, settCoeficiente] = useState(0)
  const [totalMetros, setTotalMetros] = useState(0)
  const [totalFontes, setTotalFontes] = useState({})
  const invalid = Number(potencia) + Number(rolo) + Number(perfil) + Number(coeficiente)
  const [abrirRelatorio, setAbrirRelatorio] = useState(false)

  const receberDados = ({ potencia, rolo, perfil, coeficiente }) => {
    settPotencia(potencia);
    settRolo(rolo);
    settPerfil(perfil);
    settCoeficiente(coeficiente);
  }

  const receberRelatorio = ({ totalMetros, fontes, abrirRelatorio }) => {
    setTotalMetros(totalMetros)
    setTotalFontes(fontes)
    setAbrirRelatorio(abrirRelatorio)
  }



  return (
    <div>
      {invalid > 0 ?
        (
          abrirRelatorio ?
            (
              <RelatorioFinal
                fontes={totalFontes}
                rolo={rolo}
                totalMetros={totalMetros}
              />
            )
            :
            (
              <InputMetros
                id='input-metros'
                potencia={potencia}
                rolo={rolo}
                perfil={perfil}
                coeficiente={coeficiente}
                receberRelatorio={receberRelatorio} />
            )
        )
        :
        (
          <DadosEntrada
            entradaDados={receberDados} />
        )

      }
    </div>
  )

}

export default App
